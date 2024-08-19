import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import FollowUs from '../../components/follow/FollowUs';
import BackToTop from '../../components/backToTop/BacktoTop';

const Blog = () => {
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
        <div className="text-center my-12">
          <h1 className="text-5xl font-primary">Blogs</h1>
          <p className="mt-4 text-xl font-secondary">
            Explore our latest posts, tips, and hiking stories from our blog.
          </p>
        </div>
        <Section 
          number="01"
          initial="Latest Post"
          title="Hiking in the Alps"
          description="Join us as we share the latest adventure of hiking through the Swiss Alps. Discover tips for navigating this breathtaking trail and what gear we used for this challenging but rewarding hike."
          imageUrl="/blog1.png"
          align="left"
        />
        <Section 
          number="02"
          initial="Tips"
          title="Best Hiking Routes for Beginners"
          description="If you're new to hiking, this post covers the best beginner-friendly trails across the globe. Learn which trails offer scenic views while keeping the difficulty manageable for novice hikers."
          imageUrl="/blog2.png"
          align="right"
        />
        <Section 
          number="03"
          initial="Adventure Stories"
          title="The Pacific Crest Trail Experience"
          description="A personal story from one of our hikers who completed the Pacific Crest Trail. Read about the challenges, the preparation, and the ultimate reward of conquering this iconic trail."
          imageUrl="/blog3.png"
          align="left"
        />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default Blog;
