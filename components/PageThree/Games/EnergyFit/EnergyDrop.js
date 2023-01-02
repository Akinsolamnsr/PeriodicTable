import { useReducer, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Abox, disp, ElemNumber } from '../../../Const'
import { useAppContext } from '../../../UseContext'

export default function EnergyDrop({accept,Ind}) {

 const reducer=(state,action)=>{
     let newState
       switch(action.type){
         case `${disp[Ind]}`:
          console.log(disp[Ind])
         state[Ind].push(...action.payload)
          newState={...state}
          break;
          default:
          throw new Error()
       }
       return newState
  }
     const[Elemnum,dispatched]=useReducer(reducer,ElemNumber)  
    
  const [drp,setDrp]=useState(false)
    const context=useAppContext()
    const {dispatch,state}=context
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item,montor) =>{
        dispatch({type:"SPDFBOX",payload:[item.itm]})
        setDrp(true)
        dispatched({type:"Elem"+(Ind+1),payload:[item.itm]})
       
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))

  return (
    <div ref={drop} className={`w-[3rem] h-[2.5rem] ml-1 mt-1 border border-black ${canDrop ?"bg-green-400":""}`}>
     <span className={`${state.onoff?"":`${drp?"":"hidden"}`}  `}>{accept}</span>
     </div>
  )
}