
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { DataFamily } from '../../../Const'
import { useAppContext } from '../../../UseContext'

const Reduce=()=>{

}

export default function Famdrop({data}){
    
    const context=useAppContext()
    const {dispatch}=context
    const [box, setBox]=useState([])
    const Block=[]
  const Filter=DataFamily.filter((x)=>data.includes(x[4]))
 
    const Indie=Filter.map((v)=>v[2])
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:data,
        drop: (item,montor) =>{
            dispatch({  type:"DROP2",payload:[item.itm]});

            Block.push(Filter[Indie.indexOf(item.itm)])
       
             setBox([...box,...Block])
             
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
      }))
          
    return(
        <>
        
            <div className={`inline-flex flex-wrap w-full h-full ${isOver?"bg-red-300":""}`} ref={drop}>
              {box.map((x)=>{
                return(
                    <span className='w-12 h-12 Opacity-none'>{x[1]}</span>
                )
              })}
            </div>
        </>
    )
}