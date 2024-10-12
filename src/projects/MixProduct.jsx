import React, { useCallback, useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import BackBtn from "../components/BackBtn"
import useFetch from "../customHooks/useFetch"

export default function MixProduct() {
  const [isDark] = useContext(ThemeContext)
  const [id, setId] = useState(Math.floor(Math.random() * 193 + 1))
  const data = useFetch(`https://dummyjson.com/products/${id}`)

  const handleNext = useCallback(() => {
    setId((prev) => prev + 1)
  }, [])

  const handlePrev = useCallback(() => {
    setId((prev) => prev - 1)
  }, [])
  
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />
      <div
        className={`max-w-[1050px] min-h-[750px] sm:min-h-[600px] rounded-lg mx-auto sm:mt-5 mt-10 ${
          isDark ? "sm:shadow-sm sm:shadow-white" : " sm:shadow-2xl"
        } flex items-center justify-center flex-col gap-10`}
      >
        <h1
          className={` text-2xl md:text-4xl font-bold ${
            isDark ? "text-yellow-600" : "text-sky-900"
          }`}
        >
          {data?.title}
        </h1>

        <div>
          <img
            className=" w-[300px] h-[250px] md:w-[450px] md:h-[350px]"
            src={ data?.images[2] || data?.images[0]}
            alt="product"
          />
        </div>

        <div className="sm:space-x-5 space-x-5">
          <button
            onClick={handlePrev}
            className={`text-xl p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-orange-400"
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className={`text-xl p-1 w-[120px] sm:w-[300px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "bg-green-500 text-slate-950" : "shadow-xl bg-orange-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
