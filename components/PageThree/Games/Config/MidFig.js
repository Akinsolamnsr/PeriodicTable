import { Confg } from "../../../Const";
import { useAppContext } from "../../../UseContext";
import Level5 from "./period/LevelFive";
import Level4 from "./period/LevelFour";
import Level1 from "./period/LevelOne";
import Level7 from "./period/LevelSeven";
import Level6 from "./period/LevelSix";
import Level3 from "./period/LevelThree";
import Level2 from "./period/LevelTwo";




export default function MidFig({count}){
    const context=useAppContext()
    const {state}=context
    const data=Confg[count]    
    const List=data[3].split(",")
   if(List.length===1){
    return(
        <>
        {state.double.includes(count)?(
        <div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>
            ):<Level1 count={count} />}
        </>
    )
   }

  else if(List.length===2){
    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level2 count={count} />}
        </>
    )
   }

   else if(List.length===3){
    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level3 count={count} />}
        </>
    )
   }

   else if(List.length===4){
    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level4 count={count} />}
        </>
    )
   }
   
   else if(List.length===5){
    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level5 count={count} />}
        </>
    )
   }

   else if(List.length===6){
    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level6 count={count} />}
        </>
    )
   }

   else{

    return(
        <>
        {state.double.includes(count)?(<div>
        <div>{data[3]}</div>
        <div>Correct</div>
         </div>):<Level7 count={count} />}
        </>
    )

   }
}