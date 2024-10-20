import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"
import BackBtn from "../components/BackBtn"

export default function Contact() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[89.5vh] p-4 tracking-widest ${
        isDark ? "bg-slate-950 text-white" : ""
      }`}
    >
      <BackBtn/>

      <div className="sm:mt-5">
        <h1 className="text-xl text-center  lg:text-6xl font-bold">
          Contacts
        </h1>
      </div>

      <section className="max-w-[1300px] mt-3 sm:mt-5 sm:mx-auto sm:p-1 gap-y-20 grid sm:grid-cols-2 sm:gap-x-3 sm:gap-y-10">
        <Link
          to={'/whatsapp'}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-green-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-green-600">
            <i className="fa-brands fa-whatsapp"></i>
          </h1>
          <p className="text-center mt-3 text-2xl  font-bold text-green-600">
            WhatsApp
          </p>
        </Link>

        <Link
          to={'/instagram'}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-pink-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-pink-600">
            <i className="fa-brands fa-instagram"></i>
          </h1>
          <p className="text-center mt-3 text-2xl font-bold text-pink-600">
            Instagram
          </p>
        </Link>

        <Link
          to={'/telegram'}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-blue-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-blue-600">
            <i className="fa-brands fa-telegram"></i>
          </h1>
          <p className="text-center mt-3 text-2xl font-bold text-blue-600">
            Telegram
          </p>
        </Link>

        <Link
          to={'/linkedin'}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-sky-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-sky-600">
            <i className="fa-brands fa-linkedin"></i>
          </h1>
          <p className="text-center mt-3 text-2xl font-bold text-sky-600">
            Linked-In
          </p>
        </Link>

        <Link
          to={"https://github.com/Kraven0112"}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-teal-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-teal-600">
            <i className="fa-brands fa-github"></i>
          </h1>
          <p className="text-center mt-3 text-2xl font-bold text-teal-600">
            GitHub
          </p>
        </Link>

        <Link
          to={"https://www.facebook.com"}
          className={`sm:min-h-[200px] min-h-[200px] sm:p-1 sm:rounded-lg ${
            isDark ? "shadow-md shadow-blue-600" : "shadow-xl"
          }`}
        >
          <h1 className="text-center text-6xl sm:text-8xl text-blue-600">
            <i className="fa-brands fa-facebook"></i>
          </h1>
          <p className="text-center mt-3 text-2xl font-bold text-blue-600">
            Facebook
          </p>
        </Link>
      </section>
    </main>
  )
}
