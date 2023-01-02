import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import useSound from 'use-sound'
import SliderSb from "../ElemFit/DND/Slider";
import GridBox from "./GridBox";
import SliderFm from "./Slider";



export default function FamilyFit(){
    const context=useAppContext()
  
    const {state}=context

   
    return(
        <div className="  mt-12 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-200">
                   
           <div className={`${state.drop?"hidden":""} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%]">Well done !</div>
        
         </div>
           </div>
       	<div className="w-full h-[80vh] "><GridBox /></div> 
        <div className="w-full h-[20vh] flex">
            <div className="bg-pink-200 basis-[20%]"><button className="w-full">Update</button></div>
            <div className=" basis-[80%]">
                <div className="h-[4rem] w-full "><SliderFm /></div>
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