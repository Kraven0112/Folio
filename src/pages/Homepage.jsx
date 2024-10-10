import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"

export default function Homepage() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[89.5vh] sm:flex flex-col items-center justify-center ${
        isDark
          ? "bg-[url('https://static.simpledesktops.com/uploads/desktops/2017/06/02/bg-wallpaper.png.943x630_q100.png')] text-white"
          : ""
      }`}
    >
      <div className="md:hidden max-w-[400px] mx-auto ">
        <img
          className="w-[30rem]"
          src="https://as2.ftcdn.net/v2/jpg/05/72/56/97/1000_F_572569703_lAwc7sF8Pa1f5v5EUfD3D6xRZbVDZ27O.webp"
          alt=""
        />
      </div>
      <div className="p-5 text-center">
        <h1
          className={`text-4xl sm:text-6xl font-bold ${
            isDark ? "" : "text-purple-950"
          }`}
        >
          Hi ✋✋
        </h1>
        <p
          className={`text-2xl sm:text-4xl sm:mt-4 font-bold ${
            isDark ? "" : "text-green-600"
          }`}
        >
          Sushil Chaudhary here !!
        </p>
        <p
          className={`text-2xl sm:text-4xl sm:mt-4 font-bold ${
            isDark ? "textAnimation" : "text-slate-950"
          }`}
        >
          {" "}
          I am Java FullStack Developer
        </p>
      </div>
      <div>
        <p className="max-w-[1250px] px-2 text-center mx-auto sm:mt-3 sm:text-2xl sm:text-pretty">
          I am web developer. I help to build responsive website for the
          business owner to spread their business through online.
        </p>
      </div>
      <div className="mt-8 text-center">
        <Link to={"/contact"} className={`text-4xl ${isDark?"text-cyan-600":"text-purple-900"}`}>Explore more <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
    </main>
  )
}
