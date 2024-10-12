import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import useFetch from "../../customHooks/useFetch"
import BackBtn from "../../components/BackBtn"

export default function AccessoryDetail() {
  const [single, setSingle] = useState(null)
  const [isDark] = useContext(ThemeContext)
  const { producttitle } = useParams()

  useEffect(() => {
    async function getApi() {
      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      )
      const { products } = await response.json()
      products.map((product) => {
        if (product.title === producttitle) {
          setSingle(product)
        }
      })
    }
    getApi().catch((error) => console.error(error))
  }, [producttitle])

  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn/>
      <div
        className={` max-w-[1050px] sm:min-h-[600px] sm:grid sm:grid-cols-2 rounded-lg mx-auto sm:mt-5 mt-15 p-3 ${
          isDark ? "" : " sm:shadow-2xl"
        }`}
      >
        <div className="sm:flex items-center justify-center">
        <img className=" w-full h-[400px] sm:w-[500px] sm:h-[500px]" src={single?.images[2]} alt="" />
        </div>

        <div className="flex items-center justify-center mt-4 flex-col sm:gap-4 gap-2">
        <h1 className={` text-2xl sm:text-4xl lg:text-6xl font-bold ${isDark?"textAnimation":"text-emerald-800"}`}>{single?.title}</h1>
        <h1 className="text-xl sm:text-2xl font-bold">Brand  : {single?.brand}</h1>
        <h1 className="text-xl sm:text-2xl font-bold">Price  : ${single?.price}</h1>
        <h1 className="text-xl sm:text-2xl font-bold">Rating : {single?.rating} {single?.rating < 3 && "✨✨✨"} {single?.rating > 3 && "✨✨✨✨"}</h1>
        <p className="text-lg sm:text-xl text-center">{single?.description}</p>
        </div>
      </div>
    </main>
  )
}
