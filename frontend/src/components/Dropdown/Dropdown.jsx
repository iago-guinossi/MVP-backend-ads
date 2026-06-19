import styled from "styled-components";
import { useState } from "react";
import Arrow from '@/assets/arrow.svg?react'
import { Link } from "react-router";

const Container = styled.div`
  min-width: 130px;
  position: relative;
  display: inline-block;
`

const ContainerDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  background: var(--white);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .3);
  border-radius: 10px;
  border-radius: 4px;
  transform-origin: top;
  transform: ${({ $show }) => ($show ? 'scaleY(1)' : 'scaleY(0)')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 10;
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
`;

const Button = styled.button`
  padding: 10px 20px;
  min-width: 130px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: var(--black);
`;

const StyledArrow = styled(Arrow)`
  width: 20px;
  height: auto;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  fill: var(--black);
`

const DropdownButton = styled(Link)`
  all: unset;
  display: block;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: var(--black);

  &:hover {
    background-color: var(--green);
  }
`;

export function DropDown({ name, navButtons }) {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Button onClick={() => setOpen(!open)}>{name} <StyledArrow $open={open} /></Button>
            <ContainerDropdown $show={open}>
                {navButtons.map((navButton, index) => {
                    return <DropdownButton key={index} to={navButton.path}>{navButton.name}</DropdownButton>
                })}
            </ContainerDropdown>
        </Container>
    )
}