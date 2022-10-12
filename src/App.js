import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>    
);
}

export default App;
