import styled from 'styled-components'

export const Scene = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.colors.background};  
  color: ${({theme}) => theme.colors.colorPrimary};
  transition: 0.4s ease-out;

  display: grid;
  grid-template-columns: 100px 2fr 2fr 100px;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas:
    "sectionLogo . . sectionHamburguer"
    ". sectionFoto sectionIntro ."
    "sectionSocialLinks . . sectionTheme";
`;

export const SectionLogo = styled.div`
  grid-area: sectionLogo;
  justify-self: center;
  align-self: center;
`; 

export const SectionHamburger = styled.div`
  grid-area: sectionHamburguer;
  justify-self: center;
  align-self: center;
`;

export const SectionFoto = styled.div`
  grid-area: sectionFoto;
  justify-self: center;
  align-self: center;
  padding: 5px;
  border: 2px dashed ${({theme}) => theme.colors.colorScondary}

  img {
    width: 30vw;

  }
`;

export const SectionTheme = styled.div`
  grid-area: sectionTheme;
  justify-self: center;
  align-self: center;

  button {
    outline: none;
    cursor: pointer;
    padding: 10px;
    border: none;
    background: ${({theme}) => theme.buttons.theme};
    color: #fff;
    border-radius: 20px;
  }
`;

export const SectionIntro = styled.div`
  grid-area: sectionIntro;
  align-self: center;
  position: relative;

  h1 {
    font-size: 5rem;
  }
  h3 {
    padding-left: 230px;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.2rem;
    margin: 3px;
    color: ${({theme}) => theme.colors.colorScondary}
  }
  a {
    position: absolute;
    right: 50px;
    margin-top: 30px;
    color: ${({theme}) => theme.colors.colorPrimary};
    border: 2px solid ${({theme}) => theme.colors.colorAction};
    border-radius: 0px;
    padding: 18px 36px;
    display: inline-block;
    font-family: "Lucida Console", Monaco;
    transition: 0.4s ease-out;

    &:hover {
      box-shadow: inset 0 100px 0 0 ${({theme}) => theme.colors.colorAction};
      color: #fff;
    }
  }
`;

export const SectionSocialLinks = styled.div`
  grid-area: sectionSocialLinks;
  justify-self: center;
  align-self: center;
`;
