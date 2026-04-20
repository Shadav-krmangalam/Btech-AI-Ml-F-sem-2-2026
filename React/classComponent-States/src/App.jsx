import React from "react";
class App extends React.Component{

  constructor(){
    super();

    this.state = {
      
      count:0,
      name:"Alex",
      task:"done"
    }
  }

  increment = ()=>{
    this.setState({count:this.state.count + 1})
  }

  

  render(){
    return(
      <>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      
      </>
    )
  }

}
export default App;