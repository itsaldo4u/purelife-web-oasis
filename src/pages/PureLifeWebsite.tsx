
import React, { useState, useEffect } from 'react';

// Importing section components
import Navbar from '../components/navigation/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import ContactSection from '../components/sections/ContactSection';
import FooterSection from '../components/sections/FooterSection';

const PureLifeWebsite: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default PureLifeWebsite;
