import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function AccessoryCard({image,title}) {
    const[isDark] = useContext(ThemeContext)
  return (
    <Link to={`/accessorydetail/${title}`} className={`block text-center rounded-2xl w-[full] h-[340px] sm:w-[340px] sm:h-[410px] sm:p-1 ${isDark?"shadow-sm shadow-white":"shadow-lg"}`}>
      <img className=' w-full h-[85%] sm:w-full sm:h-[90%]' src={image} alt="accessory" />
      <h1 className='sm:mt-1 sm:text-2xl text-xl font-bold'>{title}</h1>
    </Link>
  )
}
