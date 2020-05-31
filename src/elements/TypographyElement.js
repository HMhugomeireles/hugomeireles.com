import styled from "styled-components"

export const Paragraph = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.1125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.125rem"
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "medium":
        return "1.4375rem"
      case "small":
        return "1.375rem"
      case "xSmall":
        return "1.125rem"
      default:
        return "1.475rem"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.textColorPrimary
      default:
        return props.theme.colors.textColorPrimary
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`

export const Header1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.textColorPrimary
      default:
        return props.theme.colors.primaryColor
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.textColorPrimary
      default:
        return props.theme.colors.primaryColor
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
