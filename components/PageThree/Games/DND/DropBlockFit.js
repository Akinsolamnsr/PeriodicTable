import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppContext } from '../../../UseContext'
import useSound from 'use-sound'
import sound from "../../../../public/sound/mixkit-quick-jump-arcade-game-239.wav"

export default function MyDropBlock({data}) {
    const [play] = useSound(sound);
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
  const Block=data[3].split(',')[0]  
  const Val=data[1]
  return (
    <div  className={`text-center w-[4.5%] h-[11%] border text-gray-400  shadow-lg ml-[1%] mt-[1%] rounded-full ${canDrop?"":""} ${isOver?`scale-[200%]  ${Block==="s"?"bg-[#99ebff]":`${Block==="p"?"bg-[#ff80b3]":`${Block==="d"?"bg-[#80ffaa]":"bg-[#ff80ff]"}`}`}`:""}
    ${Block==="s"?"border-[#002933]":`${Block==="p"?"border-[#cc0000]":`${Block==="d"?"border-[#009933]":"border-[#b300b3]"}`}`}
    `} ref={drop}>  
    {status?(<div className={`w-full h-full rounded-full font-bold
      ${Block==="s"?"text-[#002933] bg-[#99ebff]":`${Block==="p"?"text-[#660029] bg-[#ff80b3]":`${Block==="d"?"text-[#004d1a] bg-[#80ffaa]":"text-[#330033] bg-[#ff80ff]"}`}`}
    `}>{data[1]}</div>):`${state.flip?`${Val}`:""}`}
     </div>
  )
}