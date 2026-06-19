import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer/Footer"
import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { useTrilhas } from "@/provider/TrilhaProvider";

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

const SubContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export function Trails() {
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const { trilhas } = useTrilhas();

    return (
        <>
            <NavBar />
            <Container>
                <Title>Trilhas Disponiveis</Title>
                <SubContainer>
                    {trilhas.map((trilha) => (
                        <Card key={trilha.id} {...trilha} onClick={() => setCardSelecionado(trilha)} />
                    ))}
                </SubContainer>
                {cardSelecionado && (
                    <Modal card={cardSelecionado} onClose={() => setCardSelecionado(null)} />
                )}
            </Container>
            <Footer />
        </>
    )
}
