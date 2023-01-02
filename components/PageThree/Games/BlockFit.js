import StopWatch from "../../stopWatch";
import { useAppContext } from "../../UseContext";
import ConfettiDisp from "./DND/particle";
import GridBlock from "./gridBlock";
import Slider from "./Slider";
import Confetti from 'react-confetti'
import medaLogo from "../../../public/images/medal.svg"
import medas from "../../../public/images/medals-sample.png"
import Image from 'next/image'
import useSound from 'use-sound'
import Sound from "./Sound";
import { useEffect, useState } from "react";
export default function BlockFit(){
    const context=useAppContext()
    const {dispatch,state}=context
    const [swtch,setSwtch]=useState("3")
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    const Elem1=Array.from(new Set(state.drop))
    const Elem2=Array.from(new Set(state.dropS))
    const Elem3=Array.from(new Set(state.dropT))
    
      const checkSpdf=Elem1.length===20 && state.PeriodFlip==="Twenty" || Elem2.length===40 && state.PeriodFlip==="Forty" || Elem3.length===118 && state.PeriodFlip==="Full"
      


   
   
    return(
        <div className="  mt-2">
          
            <div className={`${checkSpdf?"absolute h-[100vh] bg-gray-700 w-[105%] z-1 opacity-80 ":"hidden"}`}></div>
           <div className={`${checkSpdf?"":"hidden"} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%] text-white">Well done !</div>
         {<Sound />}
         </div>
           </div>
       	<div className={`w-full ${MaxSize?"h-[67vh]":"h-[87vh]"}  lg:mt-12`}><GridBlock /></div>
         <div className={` h-[17vh] flex`}>
            <div className="bg-pink-200 basis-[15%]"><button className="w-full">Update</button></div>
            <div className=" basis-[82%]  ">
            <div className={` w-full ${MaxSize?"h-[2rem]":"h-[4.5rem]"}`}><Slider /></div>
                <div className="flex  justify-between bg-cyan-400 ">
             <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
             <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
             <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
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