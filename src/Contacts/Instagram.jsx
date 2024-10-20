import React, { useContext } from 'react'
import BackBtn from '../components/BackBtn'
import myimage from "../assets/my.jpeg"
import { ThemeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

export default function Instagram() {
    const [isDark]   = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />
        <div className="max-w-[1200px] mx-auto">
            <img className={`block mx-auto rounded-[50%] w-[200px] ${isDark?"shadow-lg shadow-white":"shadow-lg shadow-green-400"}`} src={myimage} alt="" />
        </div>  

        <Link to={"https://www.instagram.com/s_u_s_h_i_l_0112/"} className={` block md:max-w-[800px] md:h-[250px] mx-auto rounded-lg mt-12 md:mt-16 p-3 text-center space-x-6 lg:space-y-8  ${isDark?"shadow-sm shadow-white ":"shadow-lg bg-slate-300"}`}>
            <h1 className={`text-4xl font-bold md:text-6xl text-pink-600`}> <i className='fa-brands fa-instagram'></i> Instagram</h1>
            <p className='text-2xl md:text-4xl'>ID : s_u_s_h_i_l_0112</p>
            <p className={`text-xl md:text-2xl font-bold ${isDark?"text-blue-600":"text-green-600"}`}>Click the box to see instagram</p>
        </Link>
    </main>
  )
}
