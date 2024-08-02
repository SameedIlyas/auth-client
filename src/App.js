import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAuth(true);
        setUserName(decoded.name);
      } catch (error) {
        localStorage.removeItem('token');
        setAuth(false);
      }
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <div className="App">
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={auth ? <Home userName={userName} /> : <Navigate to="/login" />} />
        <Route path="/login" element={auth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
        <Route path="/register" element={auth ? <Navigate to="/home" /> : <Register />} />
      </Routes>
    </div>
  );
}

export default App;
