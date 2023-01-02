import type { NextPage } from 'next'
import useSWR from 'swr'
import Loading from "../components/Loading"
import DataFile3 from '../components/PageThree/FilePage'
const   Games: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
 if(data){
 
  return (
    <>
      <DataFile3 {...data} />
    </>
  )
 }
 else{
  return(
    <>
    <Loading />
    </>
  )
 }
}

export default Games
