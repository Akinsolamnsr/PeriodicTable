import { useAppContext } from "../UseContext"

const PropboxTwo=()=>{
    const context=useAppContext()
    const {dispatch}=context
    return(
        <div className={`w-full h-full bg-purple-200 `}>
            <div className={`flex bg-red-100 h-8`}>
          <button className="basis-1/2" onClick={()=>dispatch({  type:"SWITCH",  payload:true})}>Table</button><button className="basis-1/2" onClick={()=>dispatch({  type:"SWITCH",  payload:false})}>List</button>
          </div>
          <div className="flex">
          <button className="basis-1/2" onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Melting"})} >
            melting point
          </button>
          <button className="basis-1/2" onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Boiling"})}>
            boiling point
          </button>
          </div>
          <hr className="border-black" />
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Ionization"})}>Ionization Energy</button></div>
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Negativity"})}>Electronegativity</button></div>
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Afinity"})}>Electron Afinity</button></div>
          <hr className="border-black" />
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Covalent"})}>Covalent radius</button></div>
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Wall"})}>Vandal wall</button></div>
          <div><button onClick={()=>dispatch({  type:"ELEMENTPROP",  payload:"Emprical"})}>Emprical Radius</button></div>
        </div>
    )
}



export default PropboxTwo