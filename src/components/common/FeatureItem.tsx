
import React, { ReactNode } from 'react';

interface FeatureItemProps {
  children: ReactNode;
}

const FeatureItem = ({ children }: FeatureItemProps) => {
  return (
    <div className="flex items-center">
      <div className="h-4 w-4 rounded-full bg-emerald-500 mr-2"></div>
      <span>{children}</span>
    </div>
  );
};

export default FeatureItem;
