import './App.css';

import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Intro from './Components/Pages/Intro';
import Signupworker from './Components/Pages/Signupworker';
import { Home } from './Components/Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log('user:', user);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/Login"
          element={user ? <Navigate to="/Home" replace={true} /> : <Login />}
        />
        <Route
          path="/Signup"
          element={user ? <Navigate to="/Home" replace={true} /> : <Signup />}
        />
        <Route
          path="/Signupworker"
          element={user ? <Navigate to="/Home" replace={true} /> : <Signupworker />}
        />
        <Route
          path="/Home"
          element={user ? <Home /> : <Navigate to="/Login" replace={true} />}
        />
      </Routes>
    </div>
  );
}

export default App;
