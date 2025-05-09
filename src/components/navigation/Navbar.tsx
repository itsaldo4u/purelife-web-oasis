
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';
import MobileNavLink from '../common/MobileNavLink';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button className="flex items-center text-stone-700 hover:text-emerald-600 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1">Cart (0)</span>
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-stone-700 hover:text-emerald-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setIsMenuOpen(false)}>Products</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <div className="pt-2 border-t border-stone-200">
              <button className="flex items-center text-stone-700 hover:text-emerald-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-1">Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
