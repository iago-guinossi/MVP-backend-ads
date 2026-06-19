import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 54px 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: var(--white);
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const Text = styled.span`
    font-size: 18px;
    line-height: calc(18px * 1.5);
    max-width: 1150px;
    color: var(--black);
    margin-bottom: 12px;
`

const Button = styled(Link)`
    all: unset;
    display: block;
    font-size: 18px;
    border-radius: 99px;
    background-color: var(--green);
    color: var(--black);
    border: 1px solid var(--dark-green);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 43px;
    margin-top: 36px;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;

    &:active {
    background-color: var(--active-green)
  }

`

export function SectionBio() {
    return (
        <Container>
            <Title>Biodiversidade de Teresópolis</Title>
            <Text>
                Teresópolis, localizada na Região Serrana do Rio de Janeiro, é um verdadeiro santuário ecológico. Seus parques naturais abrigam uma das maiores riquezas da Mata Atlântica, um dos biomas mais biodiversos — e ameaçados — do planeta. Entre os destaques estão o Parque Nacional da Serra dos Órgãos, o Parque Estadual dos Três Picos e o Parque Natural Municipal Montanhas de Teresópolis, que juntos formam um corredor ecológico vital para a conservação da fauna e flora da região.
            </Text>
            <Button to="/biodiversidade">Saiba mais!</Button>
        </Container>
    )
}