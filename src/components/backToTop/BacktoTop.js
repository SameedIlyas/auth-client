import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight;
      if (window.scrollY > (headerHeight * 0.75)) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-500 text-dark-blue rounded-full p-4 hover:bg-yellow-600 transition-all duration-300 focus:outline-none"
        style={{ zIndex: 1000, boxShadow: 'none', border: 'none' }}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-dark-blue" />
      </button>
    )
  );
};

export default BackToTop;
