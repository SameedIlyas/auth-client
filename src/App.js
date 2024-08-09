import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import PublicHome from './components/publichome/PublicHome';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { auth, userName } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/home" /> : <PublicHome />} />
        <Route path="/home" element={auth ? <Home userName={userName} /> : <Navigate to="/" />} />
        <Route path="/login" element={auth ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={auth ? <Navigate to="/home" /> : <Register />} />
      </Routes>
    </div>
  );
}

export default App;
