import styled from "styled-components"

export const SectionElement = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 50px;

  position: relative;

  display: grid;
  grid-template-columns: auto repeat(2, 450px) auto;
  grid-template-rows: repeat(3, 1fr);
  gap: 50px;
`
