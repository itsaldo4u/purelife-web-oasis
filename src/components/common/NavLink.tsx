
import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-stone-700 hover:text-emerald-600 transition-colors"
    >
      {children}
    </a>
  );
};

export default NavLink;
