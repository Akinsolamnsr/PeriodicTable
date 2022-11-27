import { DragPreviewImage, useDrag } from 'react-dnd'
import { useAppContext } from '../../../UseContext'
export default function DragDnd(prop){
  const context=useAppContext()
  const {state}=context
  const {data,Index}=prop
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:data[2],
    item:data[2],
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
       
        },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  const Block=data[3].split(',')[0]  
    return(
        <div className={`${Index?"hidden":""} inline-flex flex-col w-12 h-full ml-1  shadow-lg rounded-full font-bold ${isDragging?"hidden":""} hover:cursor-pointer
        ${Block==="s"?"text-[#002933] bg-[#99ebff]":`${Block==="p"?"text-[#660029] bg-[#ff80b3]":`${Block==="d"?"text-[#004d1a] bg-[#80ffaa]":"text-[#330033] bg-[#ff80ff]"}`}`}
        `} ref={drag}>
        <div className='text-center'>{data[1]}</div><div className="text-[0.5rem] text-center">{data[2]}</div>
        </div>
        )
}