import styled from "styled-components"

export const ContainerTransitionWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: 1.75rem;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 65%);
`
