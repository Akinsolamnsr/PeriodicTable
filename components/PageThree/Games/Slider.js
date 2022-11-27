import { List } from "../../Const"
import {Func} from "../../Pageone/constant"
import { useAppContext } from "../../UseContext"
import DragDnd from "./DND/DragBlockFit"



export default function Slider(){
    const context=useAppContext()
    const {state}=context
    const setList=new Set(state.drop)
    const arrayList=Array.from(setList)
      console.log(arrayList.length)
    return(
        <div className="w-[30rem] h-full overflow-auto">
    
     <div className="w-[515rem] h-full flex flex-wrap">
     {List.map((x,i)=>{
      
      const Stat=arrayList.indexOf(x[2]) >-1
return(
    <div className={`inline-flex `}><DragDnd {...{data:x,Index:Stat}}  /></div>
)
})}
     </div>
        </div>
        )
}

