import { NextPage } from 'next';
import { useMemo } from 'react';
import { useAppContext } from '../UseContext';
import AppSizeScreen from "./ScreenSize"
const DataTwo:NextPage = (prop) => {
    const context=useAppContext()
    const {dispatch,state}=context
     useMemo(()=>dispatch({
          type:"DATA",
          payload:prop
       }),[])
       if(Object.keys(state.data).length !== 0){
          
          return(
               <>    
              <AppSizeScreen />
                 </>
                 )
       }

       else{
          return(
               <>
             
                 </>
                 )
       }
         
}

export default DataTwo