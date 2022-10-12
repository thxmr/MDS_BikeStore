import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>    
);
}

export default App;
