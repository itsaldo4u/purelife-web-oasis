
import React, { ReactNode } from 'react';

interface SocialIconProps {
  icon: ReactNode;
  dark?: boolean;
  href?: string;
}

const SocialIcon = ({ icon, dark = false, href = "#" }: SocialIconProps) => {
  return (
    <a 
      href={href}
      className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${
        dark 
          ? "bg-stone-700 hover:bg-stone-600" 
          : "bg-emerald-100 hover:bg-emerald-200"
      } transition-colors`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
