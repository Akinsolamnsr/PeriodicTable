import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppContext } from '../UseContext';
import GameLink from "./GnsPage"



export default function AppSize() {
  const context=useAppContext()
  const {dispatch,state}=context
  const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
   function Resize(){
      const Stat=state.status?false:true
    dispatch({
      type:"STATUS",
      payload:Stat
   })
   }
   useEffect(()=>{
    dispatch({
      type:"MARGIN",
      payload:marg
   })
   
   },[marg])
  return (
    <div className={`flex-col flex`}>
      <div className={`   h-12 order-2 md:order-1 md:top-0 sticky bottom-0 w-full`}><Link href="/">Home</Link><Link href="/Properties">Properties</Link><Link href="/Games">Games</Link><button className='h-full bg-yellow-200 ml-8' onClick={Resize}>SIzes</button></div>
      <div className={`  h-screen w-[90%] ml-[5%] order-1 md:order-2 flex  ${size.width< 500?"flex-col":`${Wdth?"flex-col":"flex-row"}`}`}>
      <GameLink href="/Games/Arrange">
        <div className='w-12 h-12 border ml-12'>Arrange</div>
      </GameLink>
      <GameLink href="/Games/Block">
        <div className='w-12 h-12 border ml-12'>Block</div>
      </GameLink>
      <GameLink href="/Games/Configuration">
        <div className='w-12 h-12 border ml-12'>Config</div>
      </GameLink>
      <GameLink href="/Games/EnergyLevel">
        <div className='w-12 h-12 border ml-12'>Energy Level</div>
      </GameLink>
      <GameLink href="/Games/Family">
        <div className='w-12 h-12 border ml-12'>Family</div>
      </GameLink>
      <GameLink href="/Games/FitElement">
        <div className='w-12 h-12 border ml-12'>Element Fit</div>
      </GameLink>
      <GameLink href="/Games/TableTrend">
        <div className='w-12 h-12 border ml-12'>Trend</div>
      </GameLink>
        </div>
    </div>
  );;''
}

// Hook
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


