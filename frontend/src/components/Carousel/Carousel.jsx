import { useState } from "react";
import styled from "styled-components";
import Arrow from '@/assets/arrow.svg?react'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--green);
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: 1.1rem;
  background: var(--green);
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1;

  ${({ $direction }) => $direction === "left" && `left: 10px;`}
  ${({ $direction }) => $direction === "right" && `right: 10px;`}
`;

const ArrowIcon = styled(Arrow)`
  width: 16px;
  height: 16px;
  color: var(--white);
  transform: ${({ $direction }) =>
    $direction === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;


export function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Container>
      <Button $direction="left" onClick={prev}>
        <ArrowIcon $direction="left" />
      </Button>
      {images.length > 0
        ? <Image src={images[index].src} alt={images[index].alt} />
        : <Placeholder>Aguardando Imagem</Placeholder>
      }
      <Button $direction="right" onClick={next}>
        <ArrowIcon $direction="right" />
      </Button>
    </Container>
  );
}