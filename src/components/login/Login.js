import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-server-iota.vercel.app/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
      navigate('/home');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-lg mb-6">
            <p className="text-sm">
              Use current date using <strong>YYYYMMDD</strong> format after your base password to login successfully.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
