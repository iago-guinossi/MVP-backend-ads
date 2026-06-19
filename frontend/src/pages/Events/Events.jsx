import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer/Footer"
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
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

export function Events() {
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEventos().then(setEventos);
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <Title>Eventos Disponiveis</Title>
                <EventContainer>
                    {eventos.map((evento) => (
                        <Card key={evento.id} {...evento} onClick={() => setCardSelecionado(evento)} />
                    ))}
                </EventContainer>
                {cardSelecionado && (
                    <Modal isEvent card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                )}
            </Container>
            <Footer />
        </>
    )
}
