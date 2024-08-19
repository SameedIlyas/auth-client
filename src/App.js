import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import PublicHome from './pages/publichome/PublicHome';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Equipment from './pages/equipment/Equipment';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
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
        <Route path="/blog" element= {<Blog />} />
        <Route path="/equipment" element= {<Equipment />} />
        <Route path="/about" element= {<About />} />
      </Routes>
    </div>
  );
}

export default App;

