
import React, { ReactNode } from 'react';

interface FooterLinkProps {
  children: ReactNode;
  href?: string;
}

const FooterLink = ({ children, href = "#" }: FooterLinkProps) => {
  return (
    <li>
      <a href={href} className="hover:text-white transition-colors">
        {children}
      </a>
    </li>
  );
};

export default FooterLink;
