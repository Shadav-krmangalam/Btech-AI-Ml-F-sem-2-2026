import { useState } from "react";
import MyStore from "./Components/MyStore";
import Child1 from "./Components/Child1";

function App(){
  const[name,setName] = useState("Alex")
  const [age,setAge] = useState(20)
  return (
    <MyStore.Provider value={{name,age}}>
       <Child1/>
    </MyStore.Provider>

  )
}

export default App;