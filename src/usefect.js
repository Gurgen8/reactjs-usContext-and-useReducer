import axios from "axios"
import {useState,useEffect} from "react"

export default function (value) {

    const[data,setData]=useState()
    useEffect(() => {
        const time=   setTimeout(()=>{
           if(value){
              axios.get(`https://corona-api.com/countries/${value}`).then(results=>setData(results.data.data))
                console.log(data)
               }  setData("")  
        },500)
        return ()=>{
            clearTimeout(time)
        }
       
    }, [value])

    return  data
}
