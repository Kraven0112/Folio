import React, { useContext, useRef, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"

export default function MusicPlayer() {
  const [isDark] = useContext(ThemeContext)
  const[status,setStatus] = useState(true)
  const ref = useRef(0)

    const handleMusic = (()=>{
        setStatus(!status)
    })
  

  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />
      <div
        className={`max-w-[1050px] min-h-[750px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 flex items-center justify-center flex-col`}
      >
        <div
          className={`w-full sm:w-[350px] min-h-[500px] rounded-lg ${
            isDark ? "sm:shadow-sm sm:shadow-white" : " sm:shadow-2xl"
          } `}
        >
          <div className="mt-3">
            <h1 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold">
              Music Player
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-5">
            <img
              className={`w-[300px] h-[300px] aspect-square object-cover rounded-full roam ${
                isDark ? "shadow-md shadow-white" : " shadow-md shadow-pink-600"
              }`}
              src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg"
              alt=""
            />
          </div>

          <audio ref={ref}>
            <source src="./"/>
          </audio>

          <div className="text-center mt-5">
            <button className={`w-[100px] mt-5 text-2xl`}>
              <i className="fa-solid fa-backward"></i>
            </button>
            <button onClick={handleMusic} className={`w-[100px] mt-5 text-2xl`}>
              <i className={`fa-solid fa-${status ? "play":"pause"}`}></i>
            </button>
            <button className={`w-[100px] mt-5 text-2xl`}>
              <i className="fa-solid fa-forward"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
