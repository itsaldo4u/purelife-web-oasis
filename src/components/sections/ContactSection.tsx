
import React from 'react';
import { toast } from 'sonner';
import SectionHeading from '../common/SectionHeading';
import ContactInfo from '../common/ContactInfo';
import SocialIcon from '../common/SocialIcon';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: 'Thank you for reaching out. We will get back to you soon.',
    });
    // Reset form fields
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-emerald-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo label="Address">
                  Rruga Kadri Brahimaj, Prishtinë 10000, Kosovo
                </ContactInfo>
                <ContactInfo label="Email">
                  info@purelife.com
                </ContactInfo>
                <ContactInfo label="Phone">
                  +383 44 123 456
                </ContactInfo>
                <ContactInfo label="Hours">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </ContactInfo>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-stone-700 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Twitter size={20} />} />
                  <SocialIcon icon={<Linkedin size={20} />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
