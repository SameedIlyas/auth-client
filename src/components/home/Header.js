import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('./hero.png')` }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(11, 29, 38, 0.5) 50%, rgba(11, 29, 38, 0.9) 100%)' }}></div>
      <div className="relative p-8 md:p-16 lg:p-24">
        <nav className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white font-primary text-2xl md:text-4xl">MNTN</div>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-white font-secondary text-lg md:text-xl">
            {['Equipment', 'About us', 'Blog'].map((item) => (
              <li key={item} className="hover:text-yellow-400 cursor-pointer relative group">
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
            ))}
          </ul>
          <button 
            onClick={handleLogout} 
            className="text-white font-secondary hover:text-yellow-400 cursor-pointer relative group flex items-center mt-4 md:mt-0" 
            style={{ fontSize: '17px' }}
          >
            <img src="/user.png" alt="User Icon" className="w-6 h-6 mr-2" />
            Account
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        </nav>
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <div className='mt-16 md:mt-32'>
            <div className="flex items-center justify-center">
              <span className="block w-12 h-0.5 bg-yellow-400 mr-4"></span>
              <div className="text-yellow-400 uppercase tracking-wide font-secondary text-sm md:text-lg">
                A Hiking Guide
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold font-primary leading-tight text-center">
              Be Prepared For The<br />
              Mountains And Beyond!
            </h1>
            <p className="mt-4 font-secondary text-sm md:text-lg">scroll down ⬇</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
