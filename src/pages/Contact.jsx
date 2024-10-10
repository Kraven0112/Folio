import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"

export default function Contact() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[89.5vh] p-4 tracking-widest ${
        isDark ? "bg-slate-950 text-white" : ""
      }`}
    >
      <div className="max-w-[1250px] mx-auto py-4 px-2">
        <button
          className={`text-2xl  w-24  ${isDark?"":" sm:border shadow-lg"}`}
          onClick={() => {
            history.back()
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      <h1
        className={`text-2xl font-bold sm:text-6xl text-center ${
          isDark ? "textAnimation" : ""
        }`}
      >
        Welcome to Contact Page
      </h1>

      <div className="sm:mt-5">
        <h1 className="text-lg text-center sm:text-4xl">Feel free to contact me! if you need help to do any projects. </h1>
      </div>

      <section className="max-w-[1300px] mt-3 sm:mx-auto sm:p-1 gap-3 sm:grid sm:grid-cols-2 ">
        <Link to={"https://www.whatsApp.com"} className="sm:min-h-[200px] min-w-full sm:border sm:p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-green-600"><i className="fa-brands fa-whatsapp"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-green-600">WhatsApp</p>
        </Link>

        <Link to={"https://www.instagram.com"} className="sm:min-h-[200px] sm:border p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-pink-600"><i className="fa-brands fa-instagram"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-pink-600">Instagram</p>
        </Link>

        <Link to={"https://www.telegram.com"} className="sm:min-h-[200px] sm:border p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-blue-600"><i className="fa-brands fa-telegram"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-blue-600">Telegram</p>
        </Link>

        <Link to={"https://www.linkedIn.com"} className="sm:min-h-[200px] sm:border p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-sky-600"><i className="fa-brands fa-linkedin"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-sky-600">Linked-In</p>
        </Link>

        <Link to={"https://github.com/Kraven0112"} className="sm:min-h-[200px] sm:border p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-teal-600"><i className="fa-brands fa-github"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-teal-600">GitHub</p>
        </Link>

        <Link to={"https://www.facebook.com"} className="sm:min-h-[200px] sm:border p-1 sm:rounded-lg sm:shadow-xl mt-3">
          <h1 className="text-center text-6xl sm:text-8xl text-blue-600"><i className="fa-brands fa-facebook"></i></h1>
          <p className="text-center mt-3 text-2xl sm:text-4xl font-bold text-blue-600">Facebook</p>
        </Link>
      </section>
    </main>
  )
}
