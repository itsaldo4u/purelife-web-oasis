
import React, { ReactNode } from 'react';

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => {
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
