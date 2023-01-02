import { useAppContext } from "../../../UseContext"
import dynamic from "next/dynamic";
import { useState } from "react";
import InputConfig from "./Input.";

export default function ConTrend({data}){
  
  const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
    ssr: false
  });
    const context=useAppContext()
    const [index,setIndex]=useState(0)
    const [count, setCount] = useState(0);
    const {state,dispatch}=context
                     
    const length=state.config==="Twenty"?19:state.config==="Forty"?39:117
    return(
        <div className="inline-flex flex-col">
        <div className="h-36 ml-[20rem] flex">
          <div className="w-24 h-24 bg-green-200"></div>
          <div className="w-[20rem] h-[20rem] bg-pink-300">
            <InputConfig count={count} />
          </div>
          <div className="w-24 h-24 bg-green-200"></div>
        </div>
        
           <div className="flex ml-[20rem]">
           
           </div>
           <button onClick={()=>setCount(prev=>prev<=0?0:count-1)}>prev</button> <button onClick={()=>setCount(prev=>prev>=length?length:count+1)}>next</button>
       
         <div className=""></div>
        </div>
    )   
    }