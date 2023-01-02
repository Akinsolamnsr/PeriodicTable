import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Slider from "../Slider";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import useSound from 'use-sound'
import Sound from "../Sound";
import GridBlock from "./Grid";
import SliderSb from "./DND/Slider";
import { useEffect, useState } from "react";
export default function ElementFit(){
    const context=useAppContext()
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const marg=size.width<1300?true:false
   const Wdth=size.width>500 && size.height>1000
    const {state,dispatch}=context
    const spdf=Array.from(new Set(state.spdf))
    const checkSpdf=spdf.includes("sblock") && spdf.includes("pblock") && spdf.includes("dblock") && spdf.includes("fblock")
      console.log(checkSpdf)  
      const [swtch,setSwtch]=useState("3")
    return(
        <div className="  mt-12 bg-gradient-to-l from-sky-200 via-cyan-300 to-cyan-400" >
                   
            <div className={`${state.spdf.length===3?"absolute h-[100vh] bg-gray-700 w-[105%] z-1 opacity-50 ":"hidden"}`} style={{zIndex:5}}></div>
           <div className={`${checkSpdf?"":"hidden"} absolute h-[100vh] w-[63%]`}style={{zIndex:4}}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%]">Well done !</div>
         {<Sound />}
         </div>
           </div>
       	<div className={`w-full h-[71vh] ${MaxSize?"-mt-12 ":""} `}><GridBlock /></div>
        <div className="w-full h-[20vh] flex">
            <div className="bg-pink-200 basis-[20%]"><button className="w-full">Update</button></div>
            <div className=" basis-[80%]">
                <div className={` w-full ${MaxSize?"h-[2rem]":"h-[4rem]"}`}><SliderSb /></div>
                <div className="flex  justify-between bg-cyan-400 ">
             <button onClick={()=>{dispatch({ type:"DRAG",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
             <button onClick={()=>{dispatch({ type:"DRAG",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
             <button onClick={()=>{dispatch({ type:"DRAG",  payload:"Full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
                </div>
            </div>
            <div className="bg-pink-200 basis-[20%]">
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