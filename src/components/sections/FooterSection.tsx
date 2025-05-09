
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import FooterLink from '../common/FooterLink';
import SocialIcon from '../common/SocialIcon';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">PureLife</h3>
            <p className="mb-4">
              Embrace purity, embrace life. Natural products for your wellbeing.
            </p>
            <div className="flex space-x-4">
              <SocialIcon dark icon={<Instagram size={20} />} />
              <SocialIcon dark icon={<Facebook size={20} />} />
              <SocialIcon dark icon={<Twitter size={20} />} />
              <SocialIcon dark icon={<Linkedin size={20} />} />
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink>Supplements</FooterLink>
              <FooterLink>Herbal Teas</FooterLink>
              <FooterLink>Aromatherapy</FooterLink>
              <FooterLink>Body Care</FooterLink>
              <FooterLink>Gift Sets</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Sustainability</FooterLink>
              <FooterLink>Our Story</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Careers</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Shipping & Returns</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PureLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
