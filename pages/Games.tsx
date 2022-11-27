import type { NextPage } from 'next'
import useSWR from 'swr'
import DataFile3 from '../components/PageThree/FilePage'
const   Games: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
 if(data){
 
  return (
    <div className=' w-screen h-screen flex flex-wrap'>
      <DataFile3 {...data} />
    </div>
  )
 }
 else{
  return(
    <>
    Loading....
    </>
  )
 }
}

export default Games
