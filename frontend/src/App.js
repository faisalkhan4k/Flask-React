
import './App.css';

import { Signup } from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/Signup" element={<Signup/>} />
        
      </Routes>
    </div>
  );
}

export default App;
