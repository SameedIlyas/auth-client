import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 text-gray-400 bg-dark-blue">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 lg:gap-24">
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <div>
            <h2 className="text-white font-primary text-2xl md:text-3xl">MNTN</h2>
            <p className="mt-2 font-secondary text-sm md:text-base">
              Get out there & discover your next<br /> 
              slope, mountain & destination!
            </p>
          </div>
          <div className="mt-auto text-xs md:text-sm">
            <p>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
          </div>
        </div>
        <div className="col-span-1 font-secondary">
          <h3 className="text-[#E3C78A] font-bold mb-2 text-lg md:text-xl">More on The Blog</h3>
          <ul className="space-y-2">
            {['About MNTN', 'Contributors & Writers', 'Write For Us', 'Contact Us', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-[#E3C78A] text-sm md:text-base hover:cursor-pointer">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 font-secondary">
          <h3 className="text-[#E3C78A] font-bold mb-2 text-lg md:text-xl">More on MNTN</h3>
          <ul className="space-y-2">
            {['The Team', 'Jobs', 'Press'].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-[#E3C78A] text-sm md:text-base hover:cursor-pointer">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
