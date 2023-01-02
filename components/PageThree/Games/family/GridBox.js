
import Famdrop from "./Famdrop"



export default function GridBox(){

    const grpfm=[['Other non metals'], ['Noble gas'], ['Alkaline metal'], ['Alkaline earth metal'],
     ['Metalloid'], ['Halogen'], ['Post-transition metal',"Post-Transition Metal"], 
     ['Transition metal',"Transition Metal","Transitional Metal","Post Transitional Metal"],["Actinide"],["Lanthanide"]]

    return(
     <div className="inline-flex">
     <div className="inline-flex flex-col">  
     <>
          <div className={`w-[15rem] h-[9rem] bg-blue-100 opacity-20 mt-1`}> 
             <Famdrop data={grpfm[2]} />
            </div> 
            <div className={`w-[15rem] h-[9rem] bg-blue-300 opacity-20 mt-1`}> 
            <Famdrop data={grpfm[3]} />
            </div> 
            <div className={`w-[15rem] h-[14rem] bg-blue-100 opacity-20 mt-1`}> 
             <Famdrop data={grpfm[8]} />
            </div> 
          </> 
     </div>

     <div className="inline-flex flex-col">
     <>
            <div className={`w-[15rem] h-[7rem] bg-blue-100 opacity-20 mt-1 ml-1`}> 
            <Famdrop data={grpfm[5]} />
              </div> 
              <div className={`w-[15rem] h-[15rem] bg-blue-300 opacity-20 mt-1 ml-1`}> 
              <Famdrop data={grpfm[9]} />
              </div> 
              <div className={`w-[15rem] h-[9rem] bg-blue-100 opacity-20 mt-1 ml-1`}> 
              <Famdrop data={grpfm[4]} />
              </div> 
            </>   
     </div>
     
     <div className="inline-flex flex-col">
     <>
          <div className={`w-[15rem] h-[9rem] bg-blue-100 opacity-20 mt-1 ml-1`}> 
          <Famdrop data={grpfm[1]} />
            </div> 
            <div className={`w-[15rem] h-[9rem] bg-blue-300 opacity-20 mt-1 ml-1`}> 
            <Famdrop data={grpfm[0]} />
            </div> 
            <div className={`w-[15rem] h-[9rem] bg-blue-100 opacity-20 mt-1 ml-1`}> 
            <Famdrop data={grpfm[6]} />
            </div> 
          </> 
     </div>

     <div className="inline-flex flex-col">
     <div className={`w-[15rem] h-[26rem] bg-blue-300 opacity-20 mt-1 ml-1`}> 
     <Famdrop data={grpfm[7]} />
            </div>      
     </div>  
     </div>
    )
}