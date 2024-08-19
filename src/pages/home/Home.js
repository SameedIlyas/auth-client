import React from 'react';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import FollowUs from '../../components/follow/FollowUs'
import BackToTop from '../../components/backToTop/BacktoTop';

const Home = () => {

  return (
    <div className='bg-dark-blue text-white'>
      <Header />
      <div className="p-[80px]">
        <Slider />
        <FollowUs />
        <BackToTop />
        <Section 
          number="01"
          initial="Get Started"
          title="What level hiker are you?"
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
          imageUrl="/01.png"
          align="left"
        />
        <Section 
          number="02"
          initial="Hiking essentials"
          title="Picking the right Hiking Gear!"
          description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
          imageUrl="/02.png"
          align="right"
        />
        <Section 
          number="03"
          initial="Where you go is the key"
          title="Understand Your Map & Timing"
          description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
          imageUrl="/03.png"
          align="left"
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
