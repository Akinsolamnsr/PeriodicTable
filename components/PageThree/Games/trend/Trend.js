
import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import DrawTrend from "./Draw";



export default function TrendFit(){
    const context=useAppContext()
  
    const {state}=context

   
    return(
        <div className="  bg-gradient-to-r from-stone-100 via-stone-200 to-neutral-300">
                   
           <div className={`${state.drop?"hidden":""} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%]">Well done !</div>
        
         </div>
           </div>
       	<div className="h-screen  h-[35rem]"><DrawTrend /></div> 
        <div className="w-full h-[20vh] flex">
            <div className="bg-pink-200 basis-[20%]"><button className="w-full">Update</button></div>
            <div className=" basis-[80%]">
                <div className="h-[4rem] w-full "></div>
                <div className="flex">
             
                </div>
            </div>
            <div className="bg-pink-200 basis-[20%]">
                <StopWatch />

            </div>

        </div>
        </div>
        )
}