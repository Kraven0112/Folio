import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Header() {
  const [isDark, setDark] = useContext(ThemeContext)
  const [isVisible,setVisibility] = useState(false)
  return (
    <header
      className={` backdrop-blur-2xl tracking-widest md:sticky top-0 px-3  ${
        isDark ? " bg-slate-800 text-white" : "border shadow-md"
      }`}
    >
      <div className="max-w-[1200px] h-20 mx-auto flex items-center justify-between">
        <div>
          <h1
            className={`text-2xl sm:text-4xl font-bold ${
              isDark ? "textAnimation" : "text-green-700"
            }`}
          >
            Coder
          </h1>
        </div>
        <nav className="space-x-20 text-xl font-bold lg:block hidden">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/"}>Blogs</Link>
        </nav>
        <div className="flex">
          <Link to={"https://github.com/Kraven0112"} className="text-2xl mr-5">
            Connect
          </Link>
          <p
            onClick={() => {
              setDark(!isDark)
              localStorage.setItem("dark", isDark)
            }}
          >
            <i
              className={`fa-solid fa-sun text-2xl mr-4 rounding md:mr-5`}
            ></i>
          </p>
          <button onClick={()=>{
            setVisibility(!isVisible)
          }} className={` text-2xl lg:hidden block`}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={` ${isDark?"bg-slate-600":"bg-white text-black"} ${isVisible?`fixed  w-[100%] left-0 sm:w-[100%] flex items-center min-h-[300px] justify-between p-2 flex-col space-y-5 transition-all text-2xl font-bold`:"hidden"} lg:hidden`}>
        <h1 onClick={()=>{setVisibility(!isVisible)}}><i className="fa fa-window-close"></i></h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/project"}>Project</Link>
        <Link to={"/"}>Blogs</Link>
      </div>
    </header>
  )
}
