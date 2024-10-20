import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"
import myimage from '../assets/my.jpeg'

export default function WhatsApp() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />
        <div className="max-w-[1200px] mx-auto">
            <img className={`block mx-auto rounded-[50%] w-[200px] ${isDark?"shadow-lg shadow-white":"shadow-lg shadow-green-400"}`} src={myimage} alt="" />
            <h1 className={`text-center mt-5 text-2xl md:text-4xl font-bold ${isDark?"textAnimation":"text-green-600"}`}>Sushil Chaudhary</h1>
        </div>

        <div className=" max-w-[1200px] mx-auto md:grid md:grid-cols-2 mt-4 box-border gap-5">
        <div className={`w-full md:max-w-[600px] md:h-[300px] m-3 rounded-lg flex items-center justify-center flex-col p-4 box-border ${isDark?"shadow-sm shadow-white":"shadow-lg bg-slate-300"}`}>
            <h1 className={`text-4xl font-bold lg:text-6xl text-green-700`}>WhatsApp</h1>
            <p className="mt-4 text-2xl text-pink-500">+977-9766423737</p>
            <p className="text-2xl text-amber-500">+91-9335399356</p>
        </div>

        <div className={`w-full md:max-w-[600px] md:h-[300px] m-3 rounded-lg flex items-center justify-center p-4 box-border ${isDark?"shadow-sm shadow-white":"shadow-lg bg-slate-300"}`}>
        <h1 className="text-2xl">Mostly I use WhatsApp to contact with anyone. I think WhatsApp is one of the most used communication app to connect and contact with the people.</h1>
        </div>
        </div>
    </main>
  )
}
