
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FeatureItem from '../common/FeatureItem';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="bg-emerald-200 rounded-lg h-64 w-full md:h-96"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://source.unsplash.com/photo-1510812431401-41d2bd2722f3" 
                  alt="PureLife production" 
                  className="h-full w-full object-cover rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <SectionHeading alignment="left">About PureLife</SectionHeading>
            <p className="mb-4 text-stone-600">
              Founded with a passion for nature and wellness, PureLife brings you the finest selection of natural products that promote a healthy lifestyle.
            </p>
            <p className="mb-6 text-stone-600">
              We believe in the power of natural ingredients and their ability to enhance our wellbeing. All our products are carefully selected and crafted to ensure the highest quality and purity.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <FeatureItem>100% Natural Ingredients</FeatureItem>
              <FeatureItem>Ethically Sourced</FeatureItem>
              <FeatureItem>Eco-Friendly Packaging</FeatureItem>
              <FeatureItem>Scientifically Backed</FeatureItem>
            </div>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
