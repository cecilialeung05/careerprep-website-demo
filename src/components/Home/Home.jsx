import React from 'react';
import Hero from '../Hero/Hero';
import ServicesOverview from '../ServicesOverview/ServicesOverview';
import FeaturedContent from '../FeaturedContent/FeaturedContent';
import Testimonials from '../Testimonials/Testimonials';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedContent />
      <Testimonials />
      <AboutUs />
      <Contact />
    </>
  );
}
