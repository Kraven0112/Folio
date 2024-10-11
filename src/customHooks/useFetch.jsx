import React, { useEffect, useState } from 'react'

export default function useFetch(api) {
    const[allData,setData] = useState(null)

    useEffect(()=>{
        async function getApi(){
            const control = new AbortController()
            try{
                const response = await fetch(api,{signal:control.signal})
                const data = await response.json()
                setData(data)
            }catch(error){
                console.error(error)
            }
        }
        getApi()
    },[api])

  return allData
}
