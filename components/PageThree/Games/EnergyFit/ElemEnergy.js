import { useState } from "react";
import { Confg,Spdf } from "../../../Const";
import { useAppContext } from "../../../UseContext";
import ConEnergy from "./ConEnergy";
import EnergyDrop from "./EnergyDrop";
export default function InputEnergy({count}){
    const data=Confg[count]     
    const dataSpdf=Spdf[count]  
    const Datum=dataSpdf[3].split(",")[0]
    const Data=Datum.split(" ")
    const context=useAppContext()
    const {state,dispatch}=context
    

   return(
        <div className="w-full h-full bg-gray-300 flex flex-col">
            <div className="h-[80%] flex flex-col">
            <div className="h-[15%] bg-blue-500 text-center">{data[0]}</div>
            <div className="h-[70%] bg-blue-100 text-center text-[8rem]">{data[1]}</div>
            <div className="h-[15%] bg-blue-500 text-center">{data[2]}</div>
            </div>
            <div className="h-48 w-full  bg-blue-300">
              <ConEnergy {...{Data,index:dataSpdf[5]}} />
            </div>
            <div><button onMouseDown={()=>dispatch({type:"ONOFF",payload:true})} onMouseUp={()=>dispatch({type:"ONOFF",payload:false})}   >CHeck</button></div>
        </div>
    )
}