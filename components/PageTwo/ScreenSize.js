import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppContext } from '../UseContext';
import Ptables from './PTable';
import PropBoxTwo from './propBox';
import ListPage from './List';
    

export default function AppSizeScreen() {
  const context=useAppContext()
  const {dispatch,state}=context
  const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
 
  const Wdth=size.width>500 && size.height>1000
   function Resize(){
      const Stat=state.status?false:true
    dispatch({
      type:"STATUS",
      payload:Stat
   })
   }
  return (
    <div className={`flex-col flex`}>
      <div className={`   h-12 order-2 md:order-1 md:top-0 sticky bottom-0 w-full`}><Link href="/">Home</Link><Link href="/Properties">Properties</Link><Link href="/Games">Games</Link><button className='h-full bg-yellow-200 ml-8' onClick={Resize}>SIzes</button></div>
      <div className={`  h-screen w-[90%] ml-[5%] order-1 md:order-2 flex  ${size.width< 500?"flex-col":`${Wdth?"flex-col":"flex-row"}`}`}>
      <div className={`${size.width< 500?"w-full h-[67%] overflow-auto":`${Wdth?"w-full h-[70%] overflow-auto":`${MaxSize?"w-[70%] h-full overflow-auto":`${size.width<1300?"w-[70%] h-full overflow-auto":`w-[79%] scale-[85%] -mt-[4rem] h-full  ${state.slide?"overflow-auto":""}`}`}`}`} `}>{state.switch? <Ptables />:<ListPage />}</div>
      <div className={`${size.width< 500?"w-full h-[33%]":`${Wdth?"w-full h-[30%]":`${MaxSize?"w-[30%] h-full":`${size.width<1300?"w-[30%] h-full":"w-[25%] h-full "}`}`}`} `}><PropBoxTwo /></div> 
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