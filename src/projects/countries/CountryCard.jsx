import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function CountryCard({title,image,capital,continent,region}) {
    const[isDark] = useContext(ThemeContext)
  return (
    <Link to={`/country/${title}`} className={`block overflow-hidden rounded-2xl w-[full] marker sm:w-[340px] sm:h-[415px] hover:scale-[1] my-2 ${isDark?"shadow-sm shadow-white":"shadow-lg"}`}>
      <img className=' w-[100%] h-[200px]' src={image} alt="accessory" />
      <div className='mt-3 px-2 space-y-3'>
      <h1 className='sm:mt-1 sm:text-4xl text-2xl font-bold'>{title}</h1>
      <p className='text-xl'>Capital : {capital}</p>
      <p className='text-xl'>Continent : {continent}</p>
      <p className='text-xl'>Region : {region}</p>
      </div>
    </Link>
  )
}
