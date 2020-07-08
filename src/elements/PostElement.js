import styled from "styled-components"

export const PostCardContainer = styled.article`
  border-bottom: 3px solid tomato;
  /* border-top: 3px solid #fff; */
  z-index: 1;
  margin: 1rem 0;
  overflow: hidden;
  filter: brightness(0.7);
  position: relative;

  a {
    border-left: 1rem solid tomato;
    /* 
    border-right: 1rem solid tomato; */
    text-decoration: none;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: #f9f9f9;
    position: relative;
    z-index: 3;

    transition: 0.2s ease-in;
    filter: brightness(0.9);

    ::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: -110%;
      transform: skew(-43deg, 0);
      z-index: -1;
      background-color: tomato;
      transition: 0.2s ease-in;
    }
  }
  a:hover::before {
    left: -80%;
    filter: brightness(0.7);
  }
  a:hover,
  :hover {
    filter: brightness(1);
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: url(${props => props.thumbnail}) no-repeat center right;
    background-size: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  :hover::before {
    opacity: 1;
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
