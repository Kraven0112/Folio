import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import joke from "../assets/joke.json"

export default function Jokes() {
  const [isDark] = useContext(ThemeContext)
  const [object, setObject] = useState({})
  const [id, setId] = useState(Math.floor(Math.random() * 451 + 1))

  const handleRandom = () => {
    setId(Math.floor(Math.random() * 451 + 1))
  }

  useEffect(() => {
    setObject(joke[id])
  }, [id])

  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <div
        className={`max-w-[1050px] min-h-[450px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 ${
          isDark ? "border" : " shadow-2xl"
        } flex items-center justify-center flex-col gap-8`}
      >
        <h1
          className={` text-4xl md:text-6xl lg:text-8xl font-bold ${
            isDark ? "textAnimation" : "text-sky-900"
          }`}
        >
          Jokes Generator
        </h1>
        <p className="text-2xl sm:text-4xl lg:text-6xl">😂😄😂</p>
        <div className="text-center text-pretty space-y-2 sm:space-y-4">
          <p className="text-xl sm:text-2xl font-bold">{object.setup}</p>
          <p className="text-xl sm:text-2xl font-bold">{object.punchline}</p>
        </div>
        <button
          onClick={handleRandom}
          className={`text-xl p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
            isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-orange-400"
          }`}
        >
          Random Joke
        </button>
      </div>
    </main>
  )
}
