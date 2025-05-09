
import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  alignment?: 'center' | 'left' | 'right';
}

const SectionHeading = ({ children, alignment = "center" }: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-light mb-6 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <span className="inline-block pb-2 border-b-2 border-emerald-500">{children}</span>
    </h2>
  );
};

export default SectionHeading;
