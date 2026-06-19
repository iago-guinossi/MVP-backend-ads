import styled from "styled-components";
import LetterX from '@/assets/letterx.svg?react'
import { Carousel } from "../Carousel/Carousel";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Container = styled.div`
  background: var(--white);
  color: var(--black);
  border-radius: 16px;
  max-width: 800px;
  width: 90%;
  padding: 24px;
  position: relative;
  max-height: 90dvh;
  text-align: center;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 10px;
  height: 10px;
  right: 15px;
  top: -10px;
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: inherit;
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
`;

const Info = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLetterX = styled(LetterX)`
  width: 10px;
  height: 10px;
`

export function Modal({ card, onClose, isEvent = false }) {
  return (
    <ModalOverlay onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}><StyledLetterX/></CloseButton>
        {!isEvent && <Carousel images={card.images}/>}
        {isEvent && <Image {...card.images[0]}/>}
        <Info>
          <h2>{card.name}</h2>
          <p><strong>Localização:</strong> {card.location}</p>
          {card.distance && <p><strong>Distância:</strong> {card.distance}</p>}
          <p>{card.summary}</p>
          {card.date && <p>{card.date}</p>}
        </Info>
      </Container>
    </ModalOverlay>
  );
}