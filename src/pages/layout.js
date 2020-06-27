import React from "react"
import { MenuContextProvider } from "../context"
import { Menu } from "../screens"
import { MainElement } from "../elements"

export default function Layout({ children }) {
  return (
    <MenuContextProvider>
      <Menu />
      <main>{children}</main>
    </MenuContextProvider>
  )
}
