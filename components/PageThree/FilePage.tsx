import { NextPage } from 'next';
import { useMemo } from 'react';
import useSWR from 'swr'
import Screen from "./Screen"
import { useAppContext } from '../UseContext';
import WrapDiv from "./WrapDiv"  
const DataFile3:NextPage = (prop) => {
     const context=useAppContext()
     const {dispatch,state}=context
     useMemo(()=>dispatch({
          type:"DATA",
          payload:prop
       }),[])
       if(Object.keys(state.data).length !== 0){
          
          return(
               <WrapDiv>
             <Screen />
               </WrapDiv>
                 )
       }

       else{
          return(
               <>
         
                 </>
                 )
       }
         
}

export default DataFile3