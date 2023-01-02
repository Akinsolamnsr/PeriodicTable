import { useEffect } from "react"
import useSound from 'use-sound'
import { useAppContext } from "../../UseContext"


export default function Sound(){
    const context=useAppContext()
    const {dispatch,state}=context
    const [play] = useSound("/sound/mixkit-quick-jump-arcade-game-239.wav")
    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(()=>{
        window.addEventListener("resize", ()=>play());
    })
    return(
        <button className="border-2 border-white text-white p-1 pl-4 pr-4 rounded-full" onClick={()=>{dispatch({type:"MODAL",payload:false});refreshPage()}}>
            Close
        </button>
    )
}