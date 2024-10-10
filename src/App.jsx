import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Theme, { ThemeContext } from './contexts/ThemeContext'

export default function App() {
  return (
    <Theme>
     <Header/>
     <Outlet/>
    </Theme>
  )
}
