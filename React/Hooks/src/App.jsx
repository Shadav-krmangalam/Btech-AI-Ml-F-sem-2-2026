import { useEffect, useState } from "react";
import axios from 'axios'

function App(){

  const API ="https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"


   const [count,setCount] = useState(0)
   const [name,setName] = useState("Alex")
   const [task,setTask] = useState("done")
  //  const [arr,setArr] = useState([1,2,3,4,5])
  //  const [obj,setObj] = useState({name:"Joy",age:19})


   const increment = ()=>{
    setCount(count+1)
   }

   const changeName = ()=>{
    setName("joy")
   }

   const changeTask = ()=>{
    setTask("Pending")
   }

//    useEffect(()=>{
//     console.log("Hello Mounting...")
// },[count,task])


useEffect(()=>{
  async function fetchingAPI(){
    // let response = await fetch(API)
    // let data = await response.json()
    // console.log(data)

try{
     let response  =  await axios.get(API)
   console.log(response)

}catch(err){
  alert(err)
}
  }
  fetchingAPI()
},[])



  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>+</button>

    <h1>Name : {name}</h1>
    <button onClick={changeName}>Name change</button>

    <h1>Task : {task}</h1>
    <button onClick={changeTask}>Task Change</button>
    </>
  )

}
export default App;