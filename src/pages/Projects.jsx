import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"
import BackBtn from "../components/BackBtn"

export default function Projects() {
  const [isDark] = useContext(ThemeContext)
  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white" : ""
      }`}
    >
      <BackBtn/>
      <div>
        <h1 className={`text-center text-2xl sm:text-6xl  font-bold ${isDark?"textAnimation":"text-purple-800"}`}>My Projects</h1>
      </div>

      <Link
        to={"/counter"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-10 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/05/33/64/40/360_F_533644014_QfHpVrloCpGF6rWf65kEmuCtATQv0wJa.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-green-600 font-bold">Simple Counter</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2"> Click to see the counter project</p>
        </div>
      </Link>

      <Link
        to={"/stopwatch"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-d-render-of-stopwatch-and-timer-icon-with-clouds-on-blue-image_3678155.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-orange-500 font-bold">Stop Watch</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see stop-watch project</p>
        </div>
      </Link>

      <Link
        to={"/jokes"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://www.codewithrandom.com/wp-content/uploads/2022/11/codewithrandom11.png"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-pink-600 font-bold">Jokes</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see jokes generator project</p>
        </div>
      </Link>

      <Link
        to={"/accessory"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://img.freepik.com/premium-photo/modern-electronics-two-smartphones-tablet-wireless-headphones-stylus-power-bank-accessories-neatly-arranged-grey-surface-sleek-flat-lay-design_965119-56793.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-amber-600 font-bold"> Accessories</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see mobile project</p>
        </div>
      </Link>
      <Link
        to={"/grocery"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_640.png"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-green-600 font-bold">Grocery</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see Grocery project</p>
        </div>
      </Link>
      <Link
        to={"/allcountry"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/v1554826345/Challenges/yhq5ihanseyinzwblaw1.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-purple-700 font-bold">Countries API</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see rest-countries project</p>
        </div>
      </Link>
      <Link
        to={"/mix"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://images.jdmagicbox.com/quickquotes/images_main/dhoka-mix-2009165592-40h6tgel.png"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-violet-700 font-bold">Mixed Products</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see mix products project</p>
        </div>
      </Link>
      <Link
        to={"/music"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/set-music-player-app-mobile-600nw-2414013693.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-pink-700 font-bold">Music Player</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see music player project</p>
        </div>
      </Link>
      <Link
        to={"/cat"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://png.pngtree.com/background/20230516/original/pngtree-white-breeds-of-cat-cat-types-of-white-picture-image_2603832.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-cyan-700 font-bold">Cat Images</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see cat images project</p>
        </div>
      </Link>
      <Link
        to={"/dog"}
        className={`block sm:grid sm:grid-cols-2 sm:max-w-[1100px] sm:mx-auto sm:mt-7 mt-5 rounded-lg overflow-hidden ${isDark?"shadow-sm shadow-teal-500":"shadow-xl"}`}
      >
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/244/804/15/dog-animal-pet-cute-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:flex-col p-2">
          <h1 className="text-2xl sm:text-4xl text-indigo-700 font-bold">Dog Images</h1>
          <p className="text-xl sm:text-2xl sm:mt-3 mt-2">Click to see dog images project</p>
        </div>
      </Link>
    </main>
  )
}
