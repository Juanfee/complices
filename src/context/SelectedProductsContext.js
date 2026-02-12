import React, { createContext, useContext, useState } from "react";

const SelectedProductsContext = createContext();

export const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProduct = (product) => {
    setSelectedProducts((prev) => {
      const exists = prev.find(p => p.id === product.id);

      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <SelectedProductsContext.Provider value={{ selectedProducts, toggleProduct }}>
      {children}
    </SelectedProductsContext.Provider>
  );
};

export const useSelectedProducts = () => useContext(SelectedProductsContext);
