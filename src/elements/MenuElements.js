import styled from "styled-components"

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 20px 0 0 20px;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.grey};

  li {
    display: flex;
    align-items: center;
    height: 58px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      padding: 20px;

      ::before {
        content: "";
        width: 50px;
      }

      :hover {
        opacity: 0.8;
      }
    }
  }
`
