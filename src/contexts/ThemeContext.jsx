import { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function Theme(props) {
  const children = props.children
  const [isDark, setDark] = useState(localStorage.getItem("dark"))
  return (
    <ThemeContext.Provider value={[isDark, setDark]}>
      {children}
    </ThemeContext.Provider>
  )
}
