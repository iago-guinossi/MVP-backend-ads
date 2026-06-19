import styled from 'styled-components';
import imgLogo from '@/assets/logo.jpeg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap:10px;
    color: var(--black);
    background-color: var(--white);
    text-align: center;
`

const Image = styled.img`  
    border-radius: 100px;
    overflow: hidden;
    width: 152px;
    height: auto;
`
const Dev = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 60px;
`

const Link = styled.a`
    color: var(--black);
`

export function Footer(){
  return (
    <Container>
      <Image src={imgLogo} alt="Logo do Circuito Tere Verde"/>
      <Dev>Trabalho desenvolvido para disciplina de MVP-front-end Unifeso: <Link target='_blank' href='https://github.com/iago-guinossi/MVP-ADS-Unifeso' >Github do projeto</Link></Dev>
    </Container>
  )
}