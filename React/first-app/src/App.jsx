import Child from "./Components/Child";
import Navbar from "./Components/Navbar";

function App(){
  const name = "Alex"
  return (
    //react fragments
 <>
    <>
    <h1>Hello App Heading</h1>
    <Child name ={name} value = {1234}/>
    
    </>



     {/* <Navbar/>
      <Navbar/>
       <Navbar/>
     <h1>Hello Students</h1>
    <p>Hello para</p> */}

 
 </>
  )
}
export default App;