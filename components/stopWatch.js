import { useEffect, useMemo, useState } from "react";
import { useAppContext } from "./UseContext";



export default function StopWatch(){
    const context=useAppContext()
    const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const {state,dispatch}=context
    function refreshPage() {
        window.location.reload(false);
      }
    const [time,setTimer]=useState(0)
    const [start, setStart]=useState(false)
    useEffect(()=>{
        let Interval=null
        if(start){
            Interval=setInterval(()=>{
                setTimer(prev=>prev+100)
            },100)
        }

        else{
            clearInterval(Interval)
            setTimer(0)
        }
        return ()=>clearInterval(Interval)
    },[start])

      
    return(
        <div className={`flex flex-col  bg-white`}>
            <div className={`${MaxSize?"text-[1rem]":"text-[2rem]"} text-center`}>{time}</div>
            <button className={`${MaxSize?"text-[0.7rem]":"pt-1 pb-1"}  border-2 border-gray-400 rounded-full font-bold font-gray-400`} onClick={()=>{setStart(true);dispatch({type:"TIMER",payload:true})}}>Start Game</button>
            <button className={`${MaxSize?"text-[0.7rem]":"pt-1 pb-1"}  border-2 border-gray-400 rounded-full font-bold font-gray-400`} onClick={()=>{setStart(false);refreshPage()}}>Reset Game</button>
        </div>
    )
}


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState
    ({
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
  