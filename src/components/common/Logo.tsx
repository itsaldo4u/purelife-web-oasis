
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="h-8 w-8 rounded-full bg-emerald-600 mr-2"></div>
      <span className="text-xl font-semibold">PureLife</span>
    </Link>
  );
};

export default Logo;
