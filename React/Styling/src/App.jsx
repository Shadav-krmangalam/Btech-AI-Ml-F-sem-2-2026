import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import style from 'styled-components'

const Button = style.button`
background-color:blue;
color:white;
padding:10px;
border:none;
`;

function App(){
  return (
    <>
    <h1 style={{backgroundColor:"red",color:"magenta"}}>Hello Styling</h1>
    <Child1/>
    <Child2/>
    <Button>Click</Button>
    </>
  )

}
export default App;