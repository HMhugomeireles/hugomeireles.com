import styled from 'styled-components'

export const WrapperSection = styled.section`
  background: ${({darkMode, theme: { dark, light }}) => darkMode ? dark.backgroundMenu : light.backgroundMenu};
`