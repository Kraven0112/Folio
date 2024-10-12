import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"

export default function DogImages() {
  const [isDark] = useContext(ThemeContext)
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
        } flex items-center justify-center flex-col gap-10`}
      ></div>
    </main>
  )
}
