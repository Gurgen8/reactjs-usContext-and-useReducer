import React from 'react'
import {useState,useContext} from "react"
import usefect from "./usefect" 
const ContextValue=React.createContext()  


function Comp1 (){
  const context = useContext(ContextValue)
  return <> hello {context} </>
}
function Comp2 (){
  return <> <Comp1/> </>
}

function Comp3 (){
  return <> <Comp2/> </>
}




function App() {

    const[value,setValue] = useState("")
    const data=usefect (value)
    return <div> 
       <div style={{color:"red"}}>CORONAVIRUSE STATE</div>
      <input placeholder="ENTER COUNTRIES CODE IN 2 LATTER"  type="text" onChange={(ev)=>{
        setValue(ev.target.value)
       }} />
       <ul>        
         {data?<>
          <li> code:{data.code}</li> 
          <li> countries:{data.name}</li>
          <li> population:{data.population}</li> 
          <li> latitude:{data.coordinates.latitude}</li> 
          <li> longitude:{data.coordinates.longitude}</li> 
         <li> death:{data.today.deaths}</li> 
         <li> confirmed:{data.today.confirmed}</li> 
          </>
         :""}  
       </ul>
       <ContextValue.Provider value={data?data.name:"user"}>  <Comp3 /></ContextValue.Provider> 
    </div>
}

export default App