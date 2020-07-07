import styled from "styled-components"

export const PostCardContainer = styled.article`
  border-bottom: 3px solid #fff;
  border-top: 3px solid #fff;

  a {
    border-left: 1rem solid chocolate;
    text-decoration: none;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: #f9f9f9;
    position: relative;
    z-index: 3;

    ::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 100%;
      background-color: tomato;
      z-index: -1;
      filter: brightness(0.4);
      transition: 0.3s ease-in;
    }
  }
  a:hover::before {
    left: 0;
  }
`
export const ArticleCardHeader = styled.header`
  display: flex;

  h2 {
    font-size: 3.1rem;
  }
`

export const PostCardBody = styled.div`
  font-size: 0.8rem;

  p {
    margin-left: 3rem;
  }
`

export const PostCardFooter = styled.footer`
  padding-top: 0.4rem;

  p {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 100;

    padding: 0.4rem 0.2rem 0.4rem 2.5rem;
  }
`
