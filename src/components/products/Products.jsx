import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import './Products.css';
import { getProducts } from '../../services/productService';

const Products = () => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  const filteredProducts =
    category === "all"
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

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <h2>No hay productos disponibles</h2>
          <p>Prueba seleccionando otra categoría 😉</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
