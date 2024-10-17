import React, { useCallback, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"
import useFetch from "../customHooks/useFetch"

export default function DogImages() {
  const [isDark] = useContext(ThemeContext)
  const [single, setSingle] = useState("")
  const [id, setId] = useState(Math.floor(Math.random() * 49 + 1))
  const data = useFetch("https://dog.ceo/api/breeds/image/random/50")
  const allDog = data?.message
  
  const handleRandom = useCallback(()=>{
    setId(Math.floor(Math.random()* 49 + 1))
    setSingle(allDog[id])
  },[id,allDog])
  
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />
      <div
        className={`max-w-[1050px] min-h-[300px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 ${
          isDark ? "sm:shadow-sm sm:shadow-white" : " sm:shadow-2xl"
        } flex items-center justify-center flex-col gap-5`}
      >
        <div className="w-full h-[300px] md:w-full md:h-[500px] flex items-center justify-center">
          <img
            className={`rounded-md w-[90%] aspect-[3/3] h-full object-cover`}
            src={single || "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1441.jpg"}
            alt="dog image"
          />
        </div>

        <div>
          <button
          onClick={handleRandom}
            className={`p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark
                ? "bg-green-500 text-slate-950"
                : "shadow-xl bg-slate-950 text-white"
            }`}
          >
            Random Dog
          </button>
        </div>
      </div>
    </main>
  )
}
