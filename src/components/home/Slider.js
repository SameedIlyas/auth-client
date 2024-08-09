import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [activeSection, setActiveSection] = useState('start');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index + 1);
        }
      });

      const header = document.querySelector('header');
      const headerRect = header.getBoundingClientRect();
      if (headerRect.bottom >= window.innerHeight / 2) {
        setActiveSection('start');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 md:space-y-4 lg:space-y-6">
        <div className="flex items-center">
          <div className={`transition-opacity ease-in-out duration-300 text-white ${activeSection === 'start' ? 'opacity-100 -translate-x-4' : 'opacity-50 -translate-x-2'}`}>Start</div>
          <div className={`w-[2px] h-[40px] md:w-[3px] md:h-[60px] transition-all ease-in-out duration-300 ${activeSection === 'start' ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}></div>
        </div>

        <div className="flex items-center">
          <div className={`transition-opacity ease-in-out duration-300 text-white ${activeSection === 1 ? 'opacity-100 -translate-x-4' : 'opacity-50 -translate-x-2'}`}>01</div>
          <div className={`w-[2px] h-[40px] md:w-[3px] md:h-[60px] transition-all ease-in-out duration-300 ${activeSection === 1 ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}></div>
        </div>

        <div className="flex items-center">
          <div className={`transition-opacity ease-in-out duration-300 text-white ${activeSection === 2 ? 'opacity-100 -translate-x-4' : 'opacity-50 -translate-x-2'}`}>02</div>
          <div className={`w-[2px] h-[40px] md:w-[3px] md:h-[60px] transition-all ease-in-out duration-300 ${activeSection === 2 ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}></div>
        </div>

        <div className="flex items-center">
          <div className={`transition-opacity ease-in-out duration-300 text-white ${activeSection === 3 ? 'opacity-100 -translate-x-4' : 'opacity-50 -translate-x-2'}`}>03</div>
          <div className={`w-[2px] h-[40px] md:w-[3px] md:h-[60px] transition-all ease-in-out duration-300 ${activeSection === 3 ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
