
import './App.css';

import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Intro from './Components/Pages/Intro';
import Signupworker from './Components/Pages/Signupworker';
import { Home } from './Components/Pages/Home';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Intro/>} exact />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signupworker" element={<Signupworker/>} />
        <Route path="/Home" element={<Home/>} />      
      </Routes>
    </div>
  );
}

export default App;
