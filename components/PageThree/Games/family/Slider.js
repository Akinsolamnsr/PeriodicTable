
import { DataFamily } from "../../../Const"
import { useAppContext } from "../../../UseContext"
import FamDragDnd from "./FamDrag"




export default function SliderFm(){
    const Block=DataFamily
    const context=useAppContext()
    const {state}=context
    const setList=new Set(state.drop2)
    const arrayList=Array.from(setList)
      const TwentyList=DataFamily.slice(0,20)
      const FortyList=DataFamily.slice(0,40)
    if(state.PeriodFlip==="Twenty"){
      return(
        <div className="w-[30rem] h-full overflow-auto">
    
     <div className="w-[515rem] h-full flex flex-wrap">
     {
   TwentyList.map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div className={`inline-flex `}><FamDragDnd {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else if(state.PeriodFlip==="Forty"){
      return(
        <div className="w-[30rem] h-full overflow-auto">
    
     <div className="w-[515rem] h-full flex flex-wrap">
     {
   FortyList.map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div className={`inline-flex `}><FamDragDnd {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else{
      return(
        <div className="w-[30rem] h-full overflow-auto">
    
     <div className="w-[515rem] h-full flex flex-wrap">
     {
   DataFamily.map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div className={`inline-flex `}><FamDragDnd {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>        
        </div>
        )
    }
}

