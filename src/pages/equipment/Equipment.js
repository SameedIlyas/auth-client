import React, { useEffect} from 'react';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import FollowUs from '../../components/follow/FollowUs';
import BackToTop from '../../components/backToTop/BacktoTop';

const Equipment = () => {
  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({ top: headerHeight, behavior: 'smooth' });
  }, []);

  return (
    <div className='bg-dark-blue text-white'>
      <Header />
      <div className="p-[80px]">
        <Slider />
        <FollowUs />
        <Section 
          number="01"
          initial="The Essentials"
          title="Gear for Every Hiker"
          description="Every hiker needs certain essential gear, regardless of the trail. From sturdy boots to weather-resistant clothing, these items form the foundation of any hiking trip. Learn about the must-have equipment that ensures safety and comfort on the trails."
          imageUrl="/e1.png"
          align="left"
        />
        <Section 
          number="02"
          initial="Packing Smart"
          title="What to Bring?"
          description="Packing for a hike is an art form. Balancing the need to be prepared with the desire to travel light can be tricky. This section covers everything from hydration systems to first-aid kits, helping you pack only what’s necessary without compromising on safety."
          imageUrl="/e2.png"
          align="right"
        />
        <Section 
          number="03"
          initial="Tech Tools"
          title="Gadgets for the Modern Hiker"
          description="In today's world, technology plays a big role in hiking. From GPS devices to trekking poles with built-in compasses, there are numerous gadgets designed to enhance your hiking experience. Explore the latest in hiking technology and how it can help you navigate the wilderness with ease."
          imageUrl="/e3.png"
          align="left"
        />
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}

export default Equipment;
