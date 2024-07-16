import React, {lazy}from "react"
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import ProtectRoute from "./components/auth/ProtectRoute";
const Home  = lazy(()=> import("./pages/Home"));
const Login = lazy(()=>import("./pages/Login"));
const Chats = lazy(()=>import("./pages/Chats"));
const Groups = lazy(()=>import("./pages/Groups"))
const NotFound = lazy(()=> import("./pages/NotFound"))
function App() {
 let user = true;
  return (
    <Router>
      <Routes>
        <Route element={<ProtectRoute user = {user}/>}>
        <Route path="/chat/:id" element={<Chats/>}></Route>
        <Route path="/about" element={<h1>about</h1>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/groups" element={<Groups/>}></Route>
        </Route>
          
         <Route path="/login" element={
          <ProtectRoute user={!user}
                        redirect="/">
                 <Login/>
          </ProtectRoute>
         
          }></Route>
         <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
  
}

export default App

// learning -->
      {/* <Route path="/" element={<ProtectRoute
                                   user = {user}
                                  > <Home/></ProtectRoute>}></Route> */}
