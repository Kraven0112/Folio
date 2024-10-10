import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Stopwatch() {
    const[isDark]  = useContext(ThemeContext)
    const[milisecond,setMiliSecond] = useState(0)
    const[second,setSecond] = useState(0)
    const[minute,setMinute] = useState(0)

    const handleStart = (()=>{
        const interval = setInterval(()=>{
            setMiliSecond(prev => prev + 1)
        },12)

        return () => clearInterval(interval)
    })

    const handleStop = (() => {

    })

    if(milisecond > 99){
        setSecond(prev => prev + 1)
        setMiliSecond(0)
    }
    if(second > 59){
        setMinute(prev => prev + 1)
        setSecond(0)
    }
    if(minute > 59){
        setMinute(0)
    }

    second < 10 ? "0"+second : second

    
  return (
    <main className={`min-h-[100vh] sm:min-h-[89.5vh] p-5 ${isDark?"bg-slate-950 text-white":""}`}>
      <div className={`max-w-[1050px] min-h-[300px] sm:min-h-[600px] rounded-lg mx-auto ${
          isDark ? "border" : " shadow-2xl"
        } flex items-center justify-center flex-col gap-10`}>
                    <h1
          className={` text-4xl md:text-6xl lg:text-8xl font-bold ${
            isDark ? "textAnimation" : "text-sky-900"
          }`}
        >
          StopWatch
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">{minute < 10 ? "0"+minute : minute} : {second < 10 ? "0"+second :second} : {milisecond < 10 ? "0"+milisecond :milisecond}</h1>

        <div className="sm:space-x-5 space-x-2">
          <button
          onClick={handleStop}
            className={`text-xl p-1 w-[120px] sm:w-[250px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "border" : "shadow-xl bg-emerald-400"
            }`}
          >
            Stop
          </button>
          <button
          onClick={handleStart}
            className={`text-xl p-1 w-[120px] sm:w-[250px] sm:h-12 sm:text-2xl rounded-lg font-bold ${
              isDark ? "border" : "shadow-xl bg-emerald-400"
            }`}
          >
            Start
          </button>
        </div>
      </div>
    </main>
  )
}
