import { useAppContext } from "../../../UseContext"




export default function EnergySelector(){
  const context=useAppContext()
  const {state,dispatch}=context
   const Handle=(e)=>dispatch({type:"CONSPDF",payload:e.target.value})
    return(
   <div>
    <div className="w-[3.2rem]">
      <button onClick={Handle} value="1s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">1s</button>
      </div>
     
     <div className="w-[7rem] ">
        <button onClick={Handle} value="2s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">2s</button>
        <button  onClick={Handle} value="2p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">2p</button>
      </div>

      <div className="w-[10.5rem] ">
        <button onClick={Handle} value="3s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">3s</button>
        <button  onClick={Handle} value="3p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">3p</button>
        <button  onClick={Handle} value="3d" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">3d</button>
      </div>

      <div className="w-[14rem] ">
        <button onClick={Handle} value="4s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">4s</button>
        <button onClick={Handle} value="4p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">4p</button>
        <button onClick={Handle} value="4d" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">4d</button>
        <button onClick={Handle} value="4f"  className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">4f</button>
      </div>

      <div className="w-[14rem] ">
        <button onClick={Handle} value="5s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">5s</button>
        <button  onClick={Handle} value="5p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">5p</button>
        <button  onClick={Handle} value="5d" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">5d</button>
        <button  onClick={Handle} value="5f" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">5f</button>
      </div>

      <div className="w-[10.5rem] ">
        <button onClick={Handle} value="6s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">6s</button>
        <button onClick={Handle} value="6p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">6p</button>
        <button onClick={Handle} value="6d" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">6d</button>
      </div>

      <div className="w-[7rem] ">
        <button onClick={Handle} value="7s" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">7s</button>
        <button onClick={Handle} value="7p" className="w-[3rem] h-12 bg-green-500 text-[1.5rem] m-1">7p</button>
      </div>

   </div>
    )
}