
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from '../testimonial/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading>What Our Customers Say</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard 
            name="Andi Mlloja"
            title="Wellness Enthusiast"
            image="photo-1535713875002-d1d0cf377fde"
            text="PureLife's herbal teas have become an essential part of my daily routine. The calming blend helps me unwind after a long day."
          />
          <TestimonialCard 
            name="Elona Hyseni"
            title="Yoga Instructor"
            image="photo-1494790108377-be9c29b29330"
            text="I recommend PureLife products to all my students. Their aromatherapy oils create the perfect atmosphere for meditation and relaxation."
          />
          <TestimonialCard 
            name="Besart Krasniqi"
            title="Fitness Coach"
            image="photo-1472099645785-5658abf4ff4e"
            text="The natural supplements from PureLife have made a noticeable difference in my energy levels and recovery time. Truly amazing products!"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
