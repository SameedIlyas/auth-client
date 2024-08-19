import React from 'react';

const FollowUs = () => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col items-center z-50 space-y-4 md:space-y-6 lg:space-y-8">
      <div className="text-white font-semibold tracking-wide mb-4 transform rotate-90 text-xs md:text-base lg:text-lg">
        Follow us
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 transition-transform transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
