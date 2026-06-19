import styled from "styled-components";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Modal } from "../Modal";
import { Link } from "react-router";
import { getEventos } from "@/service/api";

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

const EventContainer = styled.div`
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

export function SectionEvent() {
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEventos().then(setEventos);
    }, []);

    const featured = eventos.slice(0, 3);

    return (
        <Container>
            <Title>Principais Eventos</Title>
            <EventContainer>
                {featured.map((evento) => (
                    <Card key={evento.id} {...evento} onClick={() => setCardSelecionado(evento)} />
                ))}
                {cardSelecionado && (
                    <Modal isEvent card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                )}
            </EventContainer>
            <Button to="/eventos">Veja mais!</Button>
        </Container>
    )
}
