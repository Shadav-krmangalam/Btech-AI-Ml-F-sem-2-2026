import { useState } from "react";
import Child from "./Components/Child";

function App(){
  const [count,setCount] = useState(0)
  const increment = ()=>{
    setCount(count+1)

  }
  const decrement = ()=>{
    setCount(count-1)

  }
  return(
    <>
    <Child count={count}/>
    
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    </>
  )

}
export default App;