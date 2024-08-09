import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ auth, setAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-primary hover:text-yellow-400">
          MNTN
        </Link>
        <nav className="space-x-4 font-secondary">
          {!auth ? (
            <>
              <Link to="/login" className="hover:text-yellow-400">Login</Link>
              <Link to="/register" className="hover:text-yellow-400">Register</Link>
            </>
          ) : (
            <>
              <Link to="/home" className="hover:text-yellow-400">Home</Link>
              <button 
                onClick={handleLogout} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
