import React from "react"
import styled from "styled-components"

const CategoryContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;
  padding: 10px;

  cursor: pointer;
  transition: 0.3s ease-in;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.boxShadow2};
    border-radius: 12px;
  }
`

export function Category({ Icon }) {
  return (
    <CategoryContainer>
      <Icon width="32px" height="32px" />
    </CategoryContainer>
  )
}
