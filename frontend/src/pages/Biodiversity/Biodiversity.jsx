import styled from "styled-components";
import { Footer } from "@/components/Footer/Footer"
import { NavBar } from "@/components/NavBar/NavBar"

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
`

export function Biodiversity() {
    return (
        <>
        <NavBar/>
        <Container>
            <Title>A biodiversidade exuberante dos parques de Teresópolis</Title>
            <Text>
                Teresópolis, localizada na Região Serrana do Rio de Janeiro, é um verdadeiro santuário ecológico. Seus parques naturais abrigam uma das maiores riquezas da Mata Atlântica, um dos biomas mais biodiversos — e ameaçados — do planeta. Entre os destaques estão o Parque Nacional da Serra dos Órgãos, o Parque Estadual dos Três Picos e o Parque Natural Municipal Montanhas de Teresópolis, que juntos formam um corredor ecológico vital para a conservação da fauna e flora da região.
            </Text>
            <Text>
                No Parque Natural Montanhas de Teresópolis, por exemplo, é possível encontrar espécies raras como o gato-do-mato-pequeno (Leopardus guttulus), o cachorro-do-mato (Cerdocyon thous) e até a imponente sussuarana (Puma concolor). A avifauna também é um espetáculo à parte, com espécies como o tucano-de-bico-preto, a araponga e o tangará, encantando observadores de aves e pesquisadores.
            </Text>
            <Text>
                Já o Parque Estadual dos Três Picos, com seus mais de 65 mil hectares, abriga o maior índice de biodiversidade do estado do Rio de Janeiro. A variação de altitude — que vai de 100 até mais de 2.300 metros — cria microclimas que favorecem a presença de espécies endêmicas e ameaçadas, além de proteger importantes nascentes e cursos dágua.
            </Text>
            <Text>
                Esses parques não são apenas refúgios para a vida selvagem, mas também espaços de educação ambiental, lazer e conexão com a natureza. Preservá-los é garantir que futuras gerações possam continuar se encantando com a beleza e a diversidade que fazem de Teresópolis um dos tesouros ecológicos do Brasil.
            </Text>
        </Container>
        <Footer/>
        </>
    )
}