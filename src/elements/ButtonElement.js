import styled from "styled-components"

export const Button = styled.button`
  background: ${({ theme }) => theme.currentTheme.button.background};
  color: ${({ theme }) => theme.currentTheme.button.color};

  border: none;
  position: relative;
  padding: 0.7rem 3rem;
  z-index: 2;
  top: 0.8rem;
  left: 0.8rem;
  transition: 0.155s ease;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.currentTheme.button.background};
    position: absolute;
    top: -0.8rem;
    left: -0.8rem;
    z-index: 0;
    transition: 0.155s ease;
  }

  &:hover::before {
    top: 0;
    left: 0;
    border: none;
  }
`
