import styled from "styled-components";
import { ADMNavButton } from "@/components/ADMNavButton";
import { Link } from "react-router";

const Container = styled.div`
    height: 120px;
    width: 100%;
    background-color: var(--white);
    display: flex;
    box-sizing: border-box;
    justify-content: end;
    align-items: center;
    padding: 0 20px;
`


export function ADMNavBar() {

  return (
    <Container>
      <ADMNavButton />
    </Container>

  )
}