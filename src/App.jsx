import { Route, Routes } from "react-router-dom"
import Navbar from "./Header/Navbar"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import Education from "./pages/Education"


function App() {
 
  return (
    <div className="bg-[#01172C] min-h-[100vh] w-screen text-white p-3 sm:px-6 md:px-8 lg:px-14 xl:px-28">

        <Routes>
            <Route path="/" element={   <Navbar/>}>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/project" element={<Project/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>
               <Route path="/skills" element={<Skills/>}></Route>
               <Route path="/education" element={<Education/>}></Route>
              
            </Route>
        </Routes>
     

    </div>
  )
}

export default App