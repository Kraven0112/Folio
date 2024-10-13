import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function SearchCountry({ fun1, fun2 }) {
  const [isDark] = useContext(ThemeContext)
  return (
    <section className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap sm:p-4 p-2 gap-5">
      <div
        className={`w-[300px] p-3 space-x-3 sm:text-xl sm:min-w-[450px] rounded-2xl sm:p-3 border sm:space-x-5 ${
          isDark ? "border" : " shadow-xl"
        }`}
      >
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search accessory"
          className="bg-transparent outline-none border-none w-[80%] sm:w-[90%]"
          onChange={(e) => {
            fun1(e.target.value)
          }}
        />
      </div>
      <select
        onChange={(e) => {
          fun2(e.target.value)
        }}
        className={` w-[200px] sm:w-[300px] rounded-2xl p-2 text-xl ${
          isDark ? "bg-slate-950 border" : "outline-none shadow-xl"
        }`}
        name=""
        id=""
      >
        <option hidden>Continent</option>
        <option value="Antarctica">Antarctica</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    </section>
  )
}
