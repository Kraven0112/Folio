import React, { useContext } from "react"

export default function BackBtn() {
  return (
    <div className="max-w-[1300px] mx-auto  px-2 hidden sm:block">
      <button
        className={`text-xl`}
        onClick={() => {
          history.back()
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>Back
      </button>
    </div>
  )
}
