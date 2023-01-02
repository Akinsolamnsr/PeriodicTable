
import React from "react"
import { Elem,LanAct} from "../../../Const"
import { useAppContext } from "../../../UseContext"

export default function GridTrend(){

    const context=useAppContext()
    const {state,dispatch}=context

    return(
       <div className="inline-flex h-[60vh] w-full flex-col items-end ">
        <button   onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} className="bg-red-200 relative mx-[50%] ">Check</button>
        <div className="flex flex-wrap w-[36rem] ">
        {Elem.map((x,i)=>{
            if(!x[0]){
                
                return(
                    <div key={`array-${i}`} className={`w-[2rem] h-[2rem] border border-pink-200 invisible `}>
                        
                    </div>
                )
            }
            else{
               
                return(
                    <div className="border border-black w-[2rem] h-[2rem]">
                    </div>
                )
            }
           
        })}
        </div>
        <div className="flex flex-wrap w-[28rem] h-[4rem] mt-4">
        {LanAct.map((x,i)=>{

return(
    <div className="border border-black w-[2rem] h-[2rem]"> </div>
)
})}
        </div>
       </div>
    )
}