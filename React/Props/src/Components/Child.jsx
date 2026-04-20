import Component1 from "./Component1"

function Child(props){
    return (
        <>
        <h1>Count : {props.count}</h1>
        <Component1 count={props.count}/>
        </>
    )
}
export default Child