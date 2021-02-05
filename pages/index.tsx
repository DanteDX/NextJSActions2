import React,{useState} from 'react';
import House from "./house";
import axios from "axios";
import {GetServerSideProps} from "next";
interface infoInterface{
  name?: string;
  age?: number;
  profession?: string;
}

export const getServerSideProps:GetServerSideProps = async(context) =>{
  console.log(process.env.SECRET," inside serverside props");
  console.log(process.env.NEXT_PUBLIC_OPEN_SECRET," inside serverSideProps");
  return {
    props:{}
  }
};
export default function Home() {
  console.log(process.env.SECRET," inside front end");
  console.log(process.env.NEXT_PUBLIC_OPEN_SECRET," inside front end");
  const [info,setInfo] = useState<infoInterface>({});
  const clickHandler = async () =>{
    const body = {
      name:'Shadman Martin Piyal',
      age:100,
      profession:"Front end developer"
    };
    const config = {
      "headers":{
        "Content-Type":"application/json"
      }
    };
    try{
      const response = await axios.post('/api/hello',JSON.stringify(body),config);
      const data = response.data;
      console.log(data.info);
      setInfo(data.info);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div data-testid="mainWrapper">
      Working
      <House />
      {
        Object.keys(info).length === 0 ? <p>Not Loaded yet</p> : (
          <>
            <p>Name:{info.name}...Age:{info.age}..Profession:{info.profession}</p>
          </>
        )
      }
      <button onClick={e => clickHandler()} className="rounded p-2 m-2 bg-gray-600 font-bold">Click me to submit</button>
      
    </div>
  )
}
