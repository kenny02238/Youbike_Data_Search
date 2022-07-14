import React,{useState,useEffect} from "react";
import routes from "./routes";
import {useRoutes} from "react-router-dom"



async function search(setData){
  

  try {
    const response= await  fetch('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
    const data = await response.json()
    setData(data);
  } catch (error) {
    console.log("請求出錯",error)
  }
  // response.then(
  //   response=>{return response.json()}
  // ).then(
  //   response=>{console.log(response)}
  // ).catch(
  //   error=>{console.log("請求出錯",error)}
  //   )
}

// function showData(data){
//   let a = data.map(()=>{
//     return <li>hi</li>
//   })
//   return a
  
// }

function App() {
  const element = useRoutes(routes) //定義路由表
  let [data,setData]=useState()

  useEffect(()=>{
    search(setData);
  },[])

  
  
  return (
    <>
      {element}
    </>
  );
}

export default App;
