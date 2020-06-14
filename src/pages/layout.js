import React from "react"
import { MenuContextProvider } from "../context"
import { Menu } from "../screens"

export default function Layout({ children }) {
  return (
    <MenuContextProvider>
      <Menu />
      {children}
    </MenuContextProvider>
  )
}
