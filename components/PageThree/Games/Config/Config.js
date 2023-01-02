import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import { useAppContext } from "../../../UseContext";
import StopWatch from '../../../stopWatch';
import ConTrend from './ConFit';
import { Confg } from '../../../Const';
import Sound from '../Sound';
export default function Config(){
   
    const context=useAppContext()
    const {dispatch,state}=context
    const Confi=Array.from(new Set(state.double))
    const checkConfi=Confi.length===20 && state.config==="Twenty" || Confi.length===40 && state.config==="Forty" || Confi.length===118
     
       
    return(
        <div className="  mt-12 bg-gradient-to-l from-sky-200 via-cyan-300 to-cyan-400">
                   
            <div className={`${checkConfi?"absolute h-[100vh] bg-gray-700 w-[63%] z-1 opacity-80 ":"hidden"}`}></div>
           <div className={`${checkConfi?"":"hidden"} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%]">Well done !</div>
        {<Sound />}
         </div>
           </div>
       	<div className="w-full h-[80vh] "><ConTrend data={Confg} /></div>
        <div className="w-full h-[20vh] flex">
            <div className="bg-pink-200 basis-[20%]"><button className="w-full">Update</button></div>
            <div className=" basis-[80%]">
                <div className="h-[4rem] w-full "></div>
                <div className="flex">
             <button onClick={()=>   dispatch({ type:"CONFIG",  payload:"Twenty" })} className="" >First Twenty</button>
             <button onClick={()=>   dispatch({ type:"CONFIG",  payload:"Forty" })}  className="">First Forty</button>
             <button onClick={()=>   dispatch({ type:"CONFIG",  payload:"Full" })} className="" >Periodic table</button>
                </div>
            </div>
            <div className="bg-pink-200 basis-[20%]">
                <StopWatch />

            </div>

        </div>
        </div>
        )
}