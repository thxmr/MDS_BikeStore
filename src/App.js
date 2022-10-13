import './App.css';
import './utils.css'
import { Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Signup from './Components/Signup/Signup';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </>    
);
}

export default App;
