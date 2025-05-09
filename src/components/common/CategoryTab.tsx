
import React, { ReactNode } from 'react';

interface CategoryTabProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const CategoryTab = ({ active, onClick, children }: CategoryTabProps) => {
  return (
    <button 
      className={`px-4 py-2 rounded-md transition-colors ${
        active 
          ? "bg-emerald-600 text-white" 
          : "bg-white text-stone-700 hover:bg-stone-100"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CategoryTab;
