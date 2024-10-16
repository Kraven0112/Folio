import React, { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import GrocerySearch from "./GrocerySearch"
import useFetch from "../../customHooks/useFetch"
import GroceryCard from "./GroceryCard"

export default function Allgrocery() {
  const [isDark] = useContext(ThemeContext)
  const [query, setQuery] = useState("")
  const data = useFetch("https://dummyjson.com/products/category/groceries")
  const allGrocery = data?.products
  console.log(allGrocery)

  return (
    <main
      className={`min-h-[100vh] sm:min-h-[89.5vh] p-4 ${
        isDark ? "bg-slate-950 text-white " : ""
      }`}
    >
      <GrocerySearch fun1={setQuery} />

      <section className=" space-y-5 sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-y-5 sm:mt-5 mt-5">
        {allGrocery?.filter((grocery)=>{
            return grocery.title.toLowerCase().includes(query) || grocery.title.includes(query)
        })
        .map((grocery) => {
          return (
            <GroceryCard
              key={grocery.title}
              title={grocery.title}
              image={grocery.images[0]}
            />
          )
        })}
      </section>
    </main>
  )
}
