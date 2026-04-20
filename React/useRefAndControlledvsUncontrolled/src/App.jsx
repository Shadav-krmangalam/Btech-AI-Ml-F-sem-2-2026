import { useEffect, useRef, useState } from "react"

function App(){
  // const myRef = useRef(null)

  // useEffect(()=>{
  //   myRef.current.focus()
  //   myRef.current.value = "Hello predefine value"

  // },[])


    const [data,setData] = useState({
      email:"",
      password:""
    })
    const handleChangeEmail = (e)=>{
     
      setData((prev)=>({
        ...prev,email:e.target.value
      }))

    }

    const handleChangePassword = (e)=>{
      setData((prev)=>({
        ...prev,
        password:e.target.value
      }))

    }


    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!data.email.includes('@krmu')){
        alert("Invalid email")
        return;
      }
      if(data.password.length<8){
        alert("Password must contain 8 digits")
        return;
      }
      console.log(data)
      setData({
      email:"",
      password:""
    })

    }

  return (
    <>
    {/* <input type="text" ref={myRef} /> */}

    <form onSubmit={handleSubmit}>
      <input type="email" value={data.email} onChange={handleChangeEmail} />
      <input type="password" value={data.password} onChange={handleChangePassword} />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App