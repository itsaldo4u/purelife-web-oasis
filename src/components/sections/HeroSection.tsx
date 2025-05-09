
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-emerald-50 to-stone-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-stone-800 animate-fade-in">
            Embrace purity, <br /><span className="font-semibold text-emerald-700">embrace life.</span>
          </h1>
          <p className="text-lg mb-6 text-stone-600 max-w-md">
            Discover our collection of natural supplements, teas, and wellness products crafted to nurture your body and mind.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Shop Now
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 animate-scale-in">
          <div className="relative">
            <div className="bg-emerald-100 rounded-full h-64 w-64 md:h-80 md:w-80 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://source.unsplash.com/photo-1564890369478-c89ca6d9cde9" 
                alt="PureLife natural products" 
                className="h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
