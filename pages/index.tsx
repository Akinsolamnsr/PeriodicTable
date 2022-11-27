import type { NextPage } from 'next'
import DataFile from '../components/Pageone/FilePage'
import useSWR from 'swr'
const Home: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
 if(data){
  
  return (
    <div className=' w-screen h-screen overflow-hidden'>
      <DataFile {...data} />
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

export default Home
