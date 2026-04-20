// function App(){
//   let flag = false;

//   if(flag===true){
//     return (
//       <h1>Hello True</h1>
//     )
//   }else{
//     return (
//       <p>Hello False</p>
//     )
//   }

// }
// export default App;





//ternary Operator


function App(){
  let flag = true;

  return(
    <>
    {flag===true ? <h1>Hello Ternary True</h1> : <p>Hello Ternary False</p>

    }

    </>
  )
}
export default App;
