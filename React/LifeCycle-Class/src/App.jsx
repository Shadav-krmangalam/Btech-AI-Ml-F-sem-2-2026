import React from "react";
class App extends React.Component{
constructor(){
  super();
  this.state = {
    count:0
  }

  }

  increment = ()=>{
    this.setState({count:this.state.count+1})
  }

  shouldComponentUpdate(nextProps,nextState){
     if(nextState.count>5){
      return true
     }
     return false
  }

  componentDidUpdate(){
    console.log("Component updated")
  }

  componentDidMount(){
    console.log("Component Mounted")
  }
render(){
  return (
    <>
    <h1>Count : {this.state.count}</h1>
    <button onClick={this.increment}>increment</button>
    </>
  )
}
}

export default App;