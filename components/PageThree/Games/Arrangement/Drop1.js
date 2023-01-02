import { useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppContext } from '../../../UseContext'


export default function MyDropTargetFit({accept}) {
    const [drp,setDrp]=useState(false)
    const context=useAppContext()
    const {state,dispatch}=context
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item,montor) =>{
        setDrp(true)
        dispatch({type:"DROP3",payload:[item.items]})
       
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  
  return (
    <div ref={drop} className={`w-ful h-full flex text-center   ${isOver?"scale-[150%] bg-green-300":""}`}>
    <span className={`w-full h-full ${state.check?"text-gray-200":`${drp?" bg-[#ff3399] text-white font-bold shadow-lg":"hidden"}`}  `}>{accept}</span>
      </div>
  )
}