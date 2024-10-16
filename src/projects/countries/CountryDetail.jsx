import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import BackBtn from "../../components/BackBtn"
import { Link, useParams } from "react-router-dom"

export default function CountryDetail() {
  const [isDark] = useContext(ThemeContext)
  const param = useParams()
  const [single, setSingle] = useState(null)

  useEffect(() => {
    async function getApi() {
      const control = new AbortController()
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${param.title}?fullText=true`,
          {
            signal: control.signal,
          }
        )
        const [data] = await response.json()
        setSingle({
          countryName: data.name.common,
          capital: data.capital,
          continent: data.continents[0],
          flag: data.flags.svg,
          population: data.population.toLocaleString("en-IN"),
          borders:null,
        })
        if(data.borders == undefined){
          return
        }
        Promise.all(
          data.borders?.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([data]) => data.name.common)
              .catch((error) => console.error(error))
          })
        )
          .then((data) => {
            setSingle((prev) => ({ ...prev, borders: data }))
          })
          .catch((error) => console.error(error))
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  }, [param.title])

  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <BackBtn />

      <div
        className={` max-w-[1150px] sm:min-h-[600px] md:grid md:grid-cols-2 md:gap-8 rounded-lg mx-auto sm:mt-5 mt-15 p-3`}
      >
        <div className="">
          <img
            className=" w-full h-[300px] sm:w-[500px]"
            src={single?.flag}
            alt=""
          />
        </div>
        <div className=" lg:space-y-5">
          <h1
            className={` text-2xl sm:text-4xl lg:text-6xl font-bold ${
              isDark ? "textAnimation" : "text-emerald-800"
            }`}
          >
            {single?.countryName}
          </h1>
          <h1 className="text-xl sm:text-2xl font-bold"></h1>
          <h1 className="text-xl sm:text-2xl font-bold">
            Capital : {single?.capital}
          </h1>
          <h1 className="text-xl sm:text-2xl font-bold">
            Continent : {single?.continent}
          </h1>
          <p className="text-lg sm:text-xl font-bold r">
            Population : {single?.population}
          </p>
          {!single?.borders ? (
          <h1 className="text-xl md:text-2xl font-bold">I have no border countries. I am introvert country.</h1>
        ) : (
          <div className="flex flex-wrap  mt-5">
            <h1 className="text-xl font-bold">Border Countries : </h1>
            {single?.borders.map((border) => {
              return (
                <Link
                  to={`/country/${border}`}
                  key={border}
                  className={` md:text-xl m-2 p-1  md:w-[150px] text-center ${
                    isDark ? "shadow-sm shadow-white" : "shadow-lg"
                  }`}
                >
                  {border}
                </Link>
              )
            })}
          </div>
        )}
        </div>
      </div>
    </main>
  )
}
