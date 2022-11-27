import { Elem,LanAct } from "../../Const"
import { useAppContext } from "../../UseContext"
import MyDropBlock2 from "./DND/DropBlock2.jFit2"
import MyDropBlock from "./DND/DropBlockFit"
import useSound from 'use-sound'
import sound from "../../../public/sound/mixkit-quick-jump-arcade-game-239.wav"

export default function GridBlock(){
    const [play] = useSound(sound);
    const context=useAppContext()
    const {state,dispatch}=context
 
    return(
       <div className="inline-flex h-[60vh] w-full flex-col items-end ">
        <button   onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} className="bg-red-200 relative mx-[50%] ">Check</button>
        <div className="flex flex-wrap w-full h-[50vh]">
        {Elem.map((x,i)=>{
            if(!x[0]){
                return(
                    <div key={`array-${i}`} className="w-[4.5%] h-[11%] border border-black ml-[1%] mt-[1%] rounded-full invisible">
                        
                    </div>
                )
            }
            else{
               
                return(
                    <>
                    {<MyDropBlock data={x[1]} />}
                    </>
                )
            }
           
        })}
        </div>
        <div className="flex flex-wrap w-[80%] h-[20vh]  -mr-4 mt-4">
        {LanAct.map((x,i)=>{

return(
    <>
            {<MyDropBlock2 data={x} />}
        </>
)
})}
        </div>
       </div>
    )
}