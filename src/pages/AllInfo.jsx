import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import BackBtn from '../components/BackBtn'

export default function AllInfo() {
    const[isDark] = useContext(ThemeContext)
  return (
    <main className={`min-h-[89.5vh] p-4 ${isDark?"bg-slate-950 text-white":""}`}>
        <BackBtn/>
      <div className='max-w-[1250px] mx-auto'>
        <h1 className={`text-center text-2xl sm:text-4xl font-bold ${isDark?"textAnimation":""}`}>All Information</h1>
        <div className={`max-w-[1000px] mt-7 sm:mt-5 mx-auto p-3 rounded-lg ${isDark?"shadow-lg shadow-gray-50":" shadow-xl border"}`}>
            <h1 className='text-xl sm:mt-4 sm:text-2xl'><b>Name :</b> Sushil Chaudhary</h1>
            <h1 className='text-xl sm:mt-4 sm:text-2xl'><b>Country :</b> Nepal</h1>
            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl text-green-600'><b>Education Level :-</b></h1>
                <p className='text-xl text-pretty'>I am 12th passed student. I had passed 12th from Sudur Pashchimanchal Academy ,Dhangadhi-Kailali Nepal.</p>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl'><b className='text-green-600'>Languages :-</b> Nepali Hindi English</h1>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl text-green-600'><b>Contact :-</b></h1>
                <p className='text-xl text-yellow-600 text-pretty'> Nepal : +9779806498654 </p>
                <p className='text-xl text-orange-600 text-pretty'> India : +919335399356</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl text-purple-600'><b>Email :-</b> sushilchaudhary2059@gmail.com</h1>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl text-green-600'><b>Skills :-</b></h1>
                <li className='text-xl text-pretty mt-3'>Can speak three languages Nepali,Hindi,English.</li>
                <li className='text-xl text-pretty mt-3'>Operate technical things easily.</li>
                <li className='text-xl text-pretty mt-3'>Friendly with the digital things.</li>
                <li className='text-xl text-pretty mt-3'>Leadership : lead the team easily.</li>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl sm:text-2xl text-green-600'><b>Programming Languages :-</b></h1>
                <li className='text-xl text-pretty mt-3'>Html</li>
                <li className='text-xl text-pretty mt-3'>CSS</li>
                <li className='text-xl text-pretty mt-3'>Javascript</li>
                <li className='text-xl text-pretty mt-3'>Java program</li>
                <li className='text-xl text-pretty mt-3'>C program</li>
                <li className='text-xl text-pretty mt-3'>React Js</li>
                <li className='text-xl text-pretty mt-3'>Node Js</li>
                <li className='text-xl text-pretty mt-3'>Next Js</li>
            </div>
            <div className='mt-5 sm:p-5 p-3 lg:hidden'>
                <Link to={"/project"} className={`block p-3 rounded-xl text-xl sm:p-4 sm:text-2xl  text-center font-bold ${isDark?"shadow-sm shadow-cyan-500 text-yellow-300":"shadow-xl text-blue-700"}`}>Click to see my projects</Link>
            </div>
            <div className='mt-5 sm:p-5 p-3 lg:hidden'>
                <Link to={"/contact"} className={`block p-3 rounded-xl text-xl sm:p-4 sm:text-2xl  text-center font-bold ${isDark?"shadow-sm shadow-cyan-500 text-yellow-300":"shadow-xl text-blue-700"}`}>Click to see my contact detail</Link>
            </div>
        </div>
      </div>
    </main>
  )
}
