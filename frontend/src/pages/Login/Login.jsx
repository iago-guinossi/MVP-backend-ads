import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { login, setToken } from '@/service/api';

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-height: calc(100vh - 390px);
`;

const Input = styled.input`
  padding: 8px;
  border: 2px solid ${({ $erro }) => ($erro ? 'red' : '#ccc')};
  border-radius: 4px;
  font-size: 16px;
  color: var(--black);
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--green);
  color: var(--black);
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--active-green);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setErro(false);
    try {
      const data = await login(email, senha);
      setToken(data.token);
      navigate('/adm-trilhas');
    } catch {
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <>
      <NavBar />
      <Container>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          $erro={erro}
          onChange={(e) => { setEmail(e.target.value); setErro(false); }}
          onKeyDown={handleKeyDown}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          $erro={erro}
          onChange={(e) => { setSenha(e.target.value); setErro(false); }}
          onKeyDown={handleKeyDown}
        />
        {erro && <Error>Email ou senha incorretos.</Error>}
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </Container>
      <Footer />
    </>
  );
}
