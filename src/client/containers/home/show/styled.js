import styled from 'styled-components'

export const Scene = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => console.log(props) || props.theme.colors.background};  
  color: ${props => props.theme.colors.colorPrimary};

  display: grid;
  grid-template-columns: 100px 2fr 3fr 100px;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas:
    "sectionLogo . . sectionHamburguer"
    ". sectionFoto sectionIntro ."
    "sectionSocialLinks . . .";
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
  border: 1px solid #fff;
  justify-self: center;
  align-self: center;
`;

export const SectionIntro = styled.div`
  grid-area: sectionIntro;
  align-self: center;


  h1 {
    font-size: 5rem;
  }
  h3 {
    padding-left: 230px;
    margin-bottom:20px;
  }
  p {
    font-size: 1.3rem;
  }

`;

export const SectionSocialLinks = styled.div`
  grid-area: sectionSocialLinks;
  justify-self: center;
  align-self: center;
`;
