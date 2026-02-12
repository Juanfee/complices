import React, {useEffect, useState} from 'react';
import ProductCard from '../productCard/ProductCard';
import './Products.css';
import { getProducts } from '../../services/productService';

const Products = () => {
  const [category, setCategory] = React.useState("all");
  const [products, setProducts] = useState([]);
  
      useEffect(() => {
          getProducts().then(products => {
              setProducts(products);
          });
      }, []);

  const filteredProducts = category === "all"
    ? products
    : products.filter(product => product.category === category);
  return (
    <div className="products-page">
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Todas las categorías</option>
          <option value="lenceria">Lencería</option>
          <option value="panties">Lubricantes</option>
          <option value="juguetes">Juguetes</option>
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;