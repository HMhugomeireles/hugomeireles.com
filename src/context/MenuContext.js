import React, { useState, createContext } from "react"

const MenuContext = createContext(null)

function MenuContextProvider({ children }) {
  const [isOpenMenu, setOpenMenu] = useState(false)

  function toggleMenu() {
    setOpenMenu(!isOpenMenu)
  }

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuContextProvider }
