import { NextPage } from 'next';
import { useMemo } from 'react';
import useSWR from 'swr'
import AppSize from "./Screen"
import { useAppContext } from '../UseContext';
  
const DataFile3:NextPage = (prop) => {
     const context=useAppContext()
     const {dispatch,state}=context
     useMemo(()=>dispatch({
          type:"DATA",
          payload:prop
       }),[])
       if(Object.keys(state.data).length !== 0){
          
          return(
               <>
             <AppSize />
                 </>
                 )
       }

       else{
          return(
               <>
             Loading...
                 </>
                 )
       }
         
}

export default DataFile3