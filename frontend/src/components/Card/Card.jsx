import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0px 0px 23px 0px rgba(0,0,0,0.3);
    background-color: var(--white);
    color: var(--black);
    align-items: center;
    overflow: hidden;
`

const Image = styled.img`
    height: 300px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 16px 0;
    gap: 12px;
`

const Tittle = styled.span`
    font-size: 32px;
    font-weight: 700;
`

const Text = styled.span`
    font-size: 18px;
    font-weight: 600;
`

export function Card({ images, distance, date, location, name, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image {...images[0]}></Image>
      <InfoContainer>
        <Tittle>{name}</Tittle>
        {distance && <Text>{distance}</Text>}
        {date && <Text>{date}</Text>}
        {location && <Text>{location}</Text>}
      </InfoContainer>
    </Container>
  )
}