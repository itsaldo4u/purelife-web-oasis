
import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import CategoryTab from '../common/CategoryTab';
import ProductCard from '../product/ProductCard';
import { getProductsByCategory } from '../../data/productData';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('supplements');

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading>Our Products</SectionHeading>
        <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
          Discover our carefully selected range of natural products designed to promote wellness, relaxation, and a balanced lifestyle.
        </p>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <CategoryTab 
            active={activeCategory === 'supplements'} 
            onClick={() => setActiveCategory('supplements')}
          >
            Supplements
          </CategoryTab>
          <CategoryTab 
            active={activeCategory === 'teas'} 
            onClick={() => setActiveCategory('teas')}
          >
            Herbal Teas
          </CategoryTab>
          <CategoryTab 
            active={activeCategory === 'aromatherapy'} 
            onClick={() => setActiveCategory('aromatherapy')}
          >
            Aromatherapy
          </CategoryTab>
          <CategoryTab 
            active={activeCategory === 'bodycare'} 
            onClick={() => setActiveCategory('bodycare')}
          >
            Body Care
          </CategoryTab>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {getProductsByCategory(activeCategory).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
