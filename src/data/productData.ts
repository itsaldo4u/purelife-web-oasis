
import { Product } from "../components/product/ProductCard";

type ProductCategories = {
  [key: string]: Product[];
};

export const getProductsByCategory = (category: string): Product[] => {
  const products: ProductCategories = {
    supplements: [
      { name: "Vitamin Complex", category: "Daily Supplements", price: "€24.99", image: "photo-1498805983167-a523078d762c", tag: "Bestseller" },
      { name: "Omega-3 Capsules", category: "Supplements", price: "€19.99", image: "photo-1577220037130-f9348fbfa7b4" },
      { name: "Magnesium Powder", category: "Minerals", price: "€22.99", image: "photo-1565071559227-20ab25b7685e" },
      { name: "Probiotics", category: "Gut Health", price: "€29.99", image: "photo-1584308666744-24d5c474f2ae", tag: "New" },
    ],
    teas: [
      { name: "Calming Blend", category: "Herbal Tea", price: "€12.99", image: "photo-1571934811356-5cc061b6821f" },
      { name: "Energy Boost", category: "Herbal Tea", price: "€14.99", image: "photo-1564890369478-c89ca6d9cde9", tag: "Popular" },
      { name: "Sleep Well", category: "Herbal Tea", price: "€11.99", image: "photo-1597318181409-cf64d0b5723b" },
      { name: "Detox Blend", category: "Herbal Tea", price: "€13.99", image: "photo-1563911892437-1feda0179e1b" },
    ],
    aromatherapy: [
      { name: "Lavender Essential Oil", category: "Essential Oil", price: "€18.99", image: "photo-1636426936422-3a0156e53850" },
      { name: "Diffuser", category: "Accessories", price: "€39.99", image: "photo-1625688449366-8842dd04e731", tag: "Bestseller" },
      { name: "Eucalyptus Oil", category: "Essential Oil", price: "€16.99", image: "photo-1625585598750-3d2e6c43c8a1" },
      { name: "Relaxation Set", category: "Gift Set", price: "€49.99", image: "photo-1636372424552-1c61a3bfbcf2" },
    ],
    bodycare: [
      { name: "Natural Body Lotion", category: "Body Care", price: "€19.99", image: "photo-1597354984706-fac992d9306f" },
      { name: "Shea Butter Cream", category: "Moisturizer", price: "€22.99", image: "photo-1621375770714-9df4919964bd", tag: "New" },
      { name: "Aloe Vera Gel", category: "Body Care", price: "€14.99", image: "photo-1499728603263-13726abce5fd" },
      { name: "Hemp Oil Balm", category: "Skincare", price: "€24.99", image: "photo-1620916297612-55a79fca96ac" },
    ]
  };
  
  return products[category] || [];
};
