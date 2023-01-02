import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import useSound from 'use-sound'
import Sound from "../Sound";
import GridBlockArrangement from "./Gridbox";
import SliderArrage from "./SliderArangement";

import { useEffect, useState } from "react";
export default function ElementArrange(){
    const context=useAppContext()
    const [swtch,setSwtch]=useState("3")
    const {state,dispatch}=context
    const ElemName=Array.from(new Set(state.drop4))
    const ElemSym=Array.from(new Set(state.drop3))
    
      const checkSpdf=ElemName.length===20 && ElemSym.length===20 && state.fitELement==="Twenty" || ElemName.length===40 && ElemSym.length===40 && state.fitELement==="Forty" || ElemName.length===118 && ElemSym.length===118 && state.fitELement==="Full"
      
      const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
      
    return(
        <div className="  mt-2 ">
                   
            <div className={`${checkSpdf?"absolute h-[100vh] bg-gray-700 w-[100%] z-1 opacity-80 ":"hidden"}`}></div>
            <div className={`${state.timer=true?"hidden":"absolute h-[87vh] bg-gray-700 w-[100%] z-1 opacity-50"}`}></div>
           <div className={`${checkSpdf?"":"hidden"} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%] text-white">Well done !</div>
         {<Sound />}
         </div>
           </div>
       	<div className={`w-full ${MaxSize?"h-[67vh]":"h-[80vh]"}  lg:mt-12`}><GridBlockArrangement /></div>
         <div className={` h-[17vh] flex`}>
            <div className="bg-pink-200 basis-[15%]"><button className="w-full">Update</button></div>
            <div className=" basis-[80%]  ">
            <div className={` w-full ${MaxSize?"h-[2rem]":"h-[4rem]"}`}><SliderArrage /></div>
                <div className="flex  justify-between bg-cyan-400 ">
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"Full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
                </div>
            </div>
            <div className="bg-pink-200 basis-[25%]">
                <StopWatch />

            </div>

        </div>
        
        </div>
        )
}





function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
             height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  