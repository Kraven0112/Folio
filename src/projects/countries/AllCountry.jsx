import React, { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import SearchCountry from "./SearchCountry"
import useFetch from "../../customHooks/useFetch"
import CountryCard from "./CountryCard"

export default function AllCountry() {
  const [query, setQuery] = useState("")
  const [continent, setContinent] = useState("")
  const [isDark] = useContext(ThemeContext)
  const data = useFetch(`https://restcountries.com/v3.1/all`)
  data?.map((country)=>{
  })
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <SearchCountry fun1={setQuery} fun2={setContinent} />

      <section className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-y-5  mt-5">
        {data?.filter((country)=>{
            return country.continents[0].includes(continent)
        })
        .filter((country)=>{
            return country.name.common.includes(query) || country.name.common.toLowerCase().includes(query)
        })
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              title={country.name.common}
              image={country.flags.png}
              continent={country.continents[0]}
              capital={country.capital}
              region={country.region}
            />
          )
        })}
      </section>
    </main>
  )
}
