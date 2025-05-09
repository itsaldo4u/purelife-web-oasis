
import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!', {
        description: 'You will now receive our newsletter.',
      });
      setEmail('');
    } else {
      toast.error('Please enter your email address');
    }
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">Join Our Community</h2>
          <p className="text-stone-600 mb-6">
            Subscribe to our newsletter for wellness tips, exclusive offers, and updates on new products.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
