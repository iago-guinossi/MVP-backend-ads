import { Footer } from "@/components/Footer/Footer"
import { NavBar } from "@/components/NavBar/NavBar"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { getTemporadas } from "@/service/api"

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
    font-size: 38px;
    margin: 0 auto 16px;
    color: var(--black);
    margin-bottom: 40px;
`

const Text = styled.span`
    font-size: 18px;
    line-height: calc(18px * 1.5);
    max-width: 1150px;
    color: var(--black);
    margin-bottom: 18px;
    white-space: pre-wrap;
`

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 18px;
`;

export function Season() {
    const [temporada, setTemporada] = useState(null);

    useEffect(() => {
        getTemporadas().then(data => {
            if (data.length > 0) setTemporada(data[0]);
        });
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <Title>Temporada Atual</Title>
                {temporada?.image && (
                    <Image src={temporada.image} alt="Banner da temporada atual" />
                )}
                {temporada?.text && (
                    <Text>{temporada.text}</Text>
                )}
            </Container>
            <Footer />
        </>
    )
}
