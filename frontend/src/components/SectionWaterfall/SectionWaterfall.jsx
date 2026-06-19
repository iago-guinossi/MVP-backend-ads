import styled from "styled-components";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Modal } from "../Modal";
import { Link } from "react-router";
import { getCachoeiras } from "@/service/api";

const Container = styled.div`
    width: 100%;
    padding: 54px 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: var(--green);
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const WaterfallContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const Button = styled(Link)`
    all: unset;
    display: block;
    font-size: 18px;
    border-radius: 99px;
    background-color: var(--white);
    color: var(--black);
    border: 1px solid var(--dark-white) ;
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
    background-color: var(--active-white);
  }
`

export function SectionWaterfall() {
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [cachoeiras, setCachoeiras] = useState([]);

    useEffect(() => {
        getCachoeiras().then(setCachoeiras);
    }, []);

    const featured = cachoeiras.slice(0, 3);

    return (
        <Container>
            <Title>Principais Cachoeiras</Title>
            <WaterfallContainer>
                {featured.map((cachoeira) => (
                    <Card key={cachoeira.id} {...cachoeira} onClick={() => setCardSelecionado(cachoeira)} />
                ))}
                {cardSelecionado && (
                    <Modal card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                )}
            </WaterfallContainer>
            <Button to="/cachoeiras">Conheça mais!</Button>
        </Container>
    )
}
