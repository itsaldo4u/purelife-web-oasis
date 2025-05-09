
import React, { ReactNode } from 'react';

interface ContactInfoProps {
  label: string;
  children: ReactNode;
}

const ContactInfo = ({ label, children }: ContactInfoProps) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-stone-700">{label}</h4>
      <p className="text-stone-600">{children}</p>
    </div>
  );
};

export default ContactInfo;
