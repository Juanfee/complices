import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { getProducts } from "../../services/productService";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Product = () => {
  const query = useQuery();
  const search = query.get("search")?.toLowerCase() || "";
  const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search) ||
    product.description.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search)
  );

  return (
    <div className="products-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
       <div className="no-products">
          <h2>No hay productos disponibles</h2>
          <p> Realiza otra búsqueda 😉</p>
        </div>
      )}
    </div>
  );
};

export default Product;
