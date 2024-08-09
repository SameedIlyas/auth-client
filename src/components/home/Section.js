import React from 'react';

const Section = ({ number, initial, title, description, imageUrl, align = 'left' }) => {
  const isImageLeft = align === 'right';

  return (
    <section className={`relative flex flex-col md:flex-row items-center p-6 bg-dark-blue ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 relative z-10">
        <h2 className="text-[8rem] md:text-[12rem] text-gray-700 font-secondary absolute top-0 left-0 transform -translate-y-24 md:-translate-y-36 -translate-x-50 opacity-10 h-[180px] md:h-[240px] w-[180px] md:w-[240px]">
          {number}
        </h2>
        <div
          className="relative z-20"
          style={{ transform: 'translateX(0)', maxWidth: 'calc(100% - 150px)' }}
        >
          <div className="flex items-center mb-4">
            <span className="block w-8 md:w-12 h-0.5 bg-yellow-400 mr-4"></span>
            <p className="text-yellow-500 uppercase tracking-wide font-secondary text-sm md:text-base">{initial}</p>
          </div>
          <h3 className="text-3xl md:text-5xl font-primary text-white">{title}</h3>
          <p className="mt-4 text-gray-300 font-secondary text-sm md:text-base">{description}</p>
          <a href="/" className="text-yellow-500 mt-6 inline-block font-secondary text-sm md:text-base">Read More ➜</a>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-[400px] md:h-[720px] w-full md:w-[566px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Section;
