import { useNavigate, useParams } from "react-router-dom";

function About() {
  const navigate = useNavigate()

  let {username} = useParams()

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username)
    navigate('/contact')
  }
  return (
    <div>About

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default About