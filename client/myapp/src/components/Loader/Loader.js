import { useEffect, useState } from "react"

export const Loader =()=>{
const [loader ,setLoader] = useState(true)

useEffect(()=>{
    setLoader(false)
})

    return <div class="loader"></div>
   
}