function Child(props){
    return(
      <>
        <h1>Hello Child Heading</h1>
        <p>{props.name}</p>
        <span>{props.value}</span>
      </>
    )
}
export default Child;