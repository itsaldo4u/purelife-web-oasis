
import React from 'react';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  text: string;
}

const TestimonialCard = ({ name, title, image, text }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
          <img 
            src={`https://source.unsplash.com/${image}`} 
            alt={name} 
            className="h-full w-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-stone-500">{title}</p>
        </div>
      </div>
      <p className="text-stone-600 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
