
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-scale-in">
      <div className="h-56 relative">
        <img 
          src={`https://source.unsplash.com/${product.image}`} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {product.tag && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-md">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-emerald-700">{product.price}</span>
          <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
