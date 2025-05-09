
import React, { ReactNode } from 'react';

interface MobileNavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default MobileNavLink;
