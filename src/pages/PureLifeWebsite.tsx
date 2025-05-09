
import React from 'react';

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
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default PureLifeWebsite;
