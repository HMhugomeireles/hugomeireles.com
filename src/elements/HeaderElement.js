import styled from "styled-components"

export const HeaderContainer = styled.section`
  height: 6.125rem;
  padding: 0 2rem 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.darkSoft};
`

export const BlogTitle = styled.section`
  background-color: #56585b;
  color: #fff;
  padding: 5rem;
  font-family: "IBM Plex Sans";
  margin-top: 0.8rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.9rem;
    color: ${({ theme }) => theme.highlighColor};
  }

  p {
    font-size: 1.6rem;
    padding-left: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  }
`
