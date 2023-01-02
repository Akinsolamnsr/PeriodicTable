import { useEffect, useState } from "react";
import GameLink from "../PageThree/GnsPage"

export default function Screen(){
   const size=useWindowSize()
  return(
    <div className={`flex flex-wrap  bg-gradient-to-r from-red-500 to-orange-500`}>
      <GameLink href="/Games/Arrange">
        <div className='w-48 h-48 border ml-12 mt-12   shadow-lg rounded bg-white  '>
          <div className="text-[2rem] font-bold"><span className="text-blue-400 border border-red-400 pl-2 pr-2 ml-2">D</span><span className="text-red-400 border border-green-400 pl-2 pr-2 ml-2">N</span><span className="text-blue-400 border border-red-400 pl-2 pr-2 ml-2">D</span></div>
          <span>Arrange</span>
        </div>
      </GameLink>
      <GameLink href="/Games/Block">   
        <div className='w-48 h-48 border ml-12 mt-12'>Block</div>  
      </GameLink>
      <GameLink href="/Games/Configuration"> 
        <div className='w-48 h-48 border ml-12 mt-12'>Config</div>
      </GameLink>
      <GameLink href="/Games/EnergyLevel">
        <div className='w-48 h-48 border ml-12 mt-12'>Energy Level</div>
      </GameLink>
      <GameLink href="/Games/Family">
        <div className='w-48 h-48 border ml-12 mt-12'>Family</div>
      </GameLink>
      <GameLink href="/Games/FitElement">
        <div className='w-48 h-48 border ml-12 mt-12'>Element Fit</div>
      </GameLink>
      <GameLink href="/Games/TableTrend">
        <div className='w-48 h-48 border ml-12 mt-12'>Trend</div>
      </GameLink>
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

