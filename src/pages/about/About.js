import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import FollowUs from '../../components/follow/FollowUs';
import BackToTop from '../../components/backToTop/BacktoTop';

const AboutUs = () => {
  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({ top: headerHeight, behavior: 'smooth' });
  }, []);

  return (
    <div className='bg-dark-blue text-white'>
      <Header />
      <div className="p-[80px]">
        <FollowUs />
        <div className="text-center my-12">
          <h1 className="text-5xl font-primary text-yellow-400">About Us</h1>
          <p className="mt-4 text-xl font-secondary">
            Learn more about our mission, our team, and what we stand for.
          </p>
        </div>
        <div className="my-12 px-8">
          <h2 className="text-3xl font-primary text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-lg font-secondary leading-relaxed">
            At MNTN, we aim to connect people with nature through hiking. Our goal is to provide the best guides, tips, and gear advice to help hikers of all levels enjoy the outdoors. Whether you're a novice looking for your first trail or a seasoned expert seeking new challenges, MNTN is here to support you.
          </p>
          <h2 className="text-3xl font-primary text-yellow-400 mt-8 mb-4">Our Team</h2>
          <p className="text-lg font-secondary leading-relaxed">
            Our team consists of avid hikers, outdoor enthusiasts, and gear experts who have explored trails all around the world. We bring our passion for hiking into everything we do, from creating helpful content to testing and reviewing the latest gear.
          </p>
          <h2 className="text-3xl font-primary text-yellow-400 mt-8 mb-4">Our Vision</h2>
          <p className="text-lg font-secondary leading-relaxed">
            We believe that everyone should have access to nature. Our vision is to inspire more people to explore the outdoors, respect the environment, and push their limits while ensuring safety and preparedness.
          </p>
        </div>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default AboutUs;
