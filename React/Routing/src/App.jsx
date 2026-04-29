import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
function App(){
  return (
    <BrowserRouter>

   <Navbar/>

    <Routes>

      <Route path="/about/:username" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>

    </BrowserRouter>
  )

}

export default App;