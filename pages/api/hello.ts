import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'staticFileNew.json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  const Contents=JSON.parse(fileContents)
  const List=Contents.map((v:any)=>{ 
    const {number,symbol,name,pictures,family}=v.General
       return [number,symbol,name,pictures,family]
  })  
  const ListCon=Contents.map((v:any)=>{ 
    const {number,symbol,name,config1}=v.General
       return [number,symbol,name,config1]
  })  
  
  const ListSpdf=Contents.map((v:any)=>{ 
    const {number,symbol,name,config2,pictures}=v.General
       return [number,symbol,name,config2,pictures]
  })   
  const Filter=List.filter((x:any)=>["2"].includes(x[0]))
  const Slice=List.slice(88,103)  
  const Lst=ListSpdf.map((x:any)=>{
    const splt=x[3].split(",")
      return splt[0].split(" ")
  })
//  console.log(List)
  //Return the content of the data file in json format

  res.status(200).json(ListCon);
}