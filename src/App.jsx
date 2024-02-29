import React from "react";
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/firstpage.jsx';
import Login from "./pages/login";
// import Signup from "./pages/signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<FirstPage/>} />
        <Route path='login' element={<Login />} />
      
      </Routes>
  
    
    </BrowserRouter>
  );
}

export default App;