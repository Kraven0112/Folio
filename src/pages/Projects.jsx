import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"

export default function Projects() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white" : ""
      }`}
    >
      <Link to={""} className="block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto border sm:mt-5 mt-5">
        <div className="">
        <img src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
        </div>
        <div className="">
        <h1>Counter</h1>
        <p>Simple counter. Click to see the counter project</p>
        </div>
      </Link>

      <Link to={""} className="block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto border sm:mt-5 mt-5">
        <div className="">
        <img src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" alt="" />
        </div>
        <div className="">
        <h1>Counter</h1>
        <p>Simple counter. Click to see the counter project</p>
        </div>
      </Link>

    </main>
  )
}
