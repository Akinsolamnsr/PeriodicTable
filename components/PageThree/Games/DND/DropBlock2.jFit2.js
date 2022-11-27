import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppContext } from '../../../UseContext'


export default function MyDropBlock2({data}) {
    const context=useAppContext()
    const {dispatch,state}=context
    const [status,setStatus]=useState(false)
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept:data[2],
    drop: (item,montor) =>{
        setStatus(true); 
         dispatch({  type:"DROPSTATUS",payload:[data[2]]});
         
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  
  return (
    <div key={`array-${data[0]}`}  className={`text-center w-[5.8%] h-[27%] border border-[#b300b3] shadow-lg ml-[1%] mt-[1%] rounded-full ${canDrop?"":""} ${isOver?"scale-[200%] bg-[#ff80ff]":""} text-gray-400`} ref={drop}>  
    {status?(<div className='w-full h-full rounded-full font-bold text-[#330033] bg-[#ff80ff]'>{data[1]}</div>):`${state.flip?`${data[1]}`:""}`}
     </div>
  )
}