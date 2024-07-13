import React, {lazy}from "react"
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
const Home  = lazy(()=> import("./pages/Home"));
const Login = lazy(()=>import("./pages/Login"));
const Chats = lazy(()=>import("./pages/Chats"));
const Groups = lazy(()=>import("./pages/Groups"))
function App() {
 
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<h1>about</h1>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/chat/:id" element={<Chats/>}></Route>
         <Route path="/groups" element={<Groups/>}></Route>
         <Route path="*" element={<Login/>}></Route>
      </Routes>
    </Router>
  )
  
}

export default App
