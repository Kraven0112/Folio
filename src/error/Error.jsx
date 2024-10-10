import React, { useContext } from "react"
import { useRouteError } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Error() {
  const error = useRouteError()
  return (
    <div
      className={`max-w-[1000px] text-red-700 mx-auto p-3 min-h-[400px] shadow-2xl rounded-lg mt-20 flex items-center justify-center flex-col`}
    >
      <h1 className="text-2xl sm:text-4xl">
        Status : {error.status} {error.statusText}
      </h1>
      <h1 className="text-2xl sm:text-4xl mt-3 sm:mt-5">{error.data}</h1>
    </div>
  )
}
