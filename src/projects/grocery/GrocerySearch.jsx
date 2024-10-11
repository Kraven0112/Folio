import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function GrocerySearch({fun1}) {
    const[isDark] = useContext(ThemeContext)
  return (
    <section className='max-w-[1200px] mx-auto  sm:p-4 p-2 gap-5'>
    <div className={`w-[300px] p-3 space-x-3 sm:text-xl sm:min-w-[450px] rounded-2xl sm:p-3 border sm:space-x-5 ${isDark?"border":" shadow-xl"}`}>
    <i className="fas fa-search"></i>
      <input type="text" placeholder='Search accessory' className='bg-transparent outline-none border-none w-[80%] sm:w-[90%]' onChange={(e)=>{fun1(e.target.value)}} />
    </div>
  </section>
  )
}
