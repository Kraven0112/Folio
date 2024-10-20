import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Header() {
  const [isDark, setDark] = useContext(ThemeContext)
  const [isVisible, setVisibility] = useState(false)
  return (
    <header
      className={` backdrop-blur-2xl tracking-widest sticky top-0 px-3 z-10  ${
        isDark ? " bg-slate-800 text-white" : "border shadow-md bg-white"
      }`}
    >
      <div className="max-w-[1200px] h-20 mx-auto flex items-center justify-between">
        <div>
          <h1
            className={`text-xl sm:text-2xl font-bold ${
              isDark ? "textAnimation" : "text-green-600"
            }`}
          >
          {" </ Coder >"}
          </h1>
        </div>
        <nav className="space-x-16 text-xl lg:block hidden">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/"}>Blogs</Link>
        </nav>
        <div className="flex">
          <Link to={"/"} className={` text-xl mx-3 lg:hidden block`}>
            <i className="fa-solid fa-home"></i>
          </Link>
          <Link
            to={"https://github.com/Kraven0112"}
            className=" hidden sm:block sm:text-xl mr-5"
          >
            Connect
          </Link>
          <p
            onClick={() => {
              setDark(!isDark)
              localStorage.setItem("dark", isDark)
            }}
          >
            <i className={`fa-solid fa-sun text-xl mr-4 rounding md:mr-5`}></i>
          </p>
          <button
            onClick={() => {
              setVisibility(!isVisible)
            }}
            className={` text-xl md:hidden block`}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
