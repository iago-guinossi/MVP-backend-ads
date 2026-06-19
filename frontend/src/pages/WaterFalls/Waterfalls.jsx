import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer/Footer"
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
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

const SubContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export function Waterfalls() {
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [cachoeiras, setCachoeiras] = useState([]);

    useEffect(() => {
        getCachoeiras().then(setCachoeiras);
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <Title>Cachoeiras Disponiveis</Title>
                <SubContainer>
                    {cachoeiras.map((cachoeira) => (
                        <Card key={cachoeira.id} {...cachoeira} onClick={() => setCardSelecionado(cachoeira)} />
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
