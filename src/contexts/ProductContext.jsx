import React, { createContext, useEffect, useState } from "react";
// Backup Data
// import { BackupDataProducts, BackupDataCategories } from "../Data/BackupData";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products");
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (err) {
        console.error("Error during Fetching", err);
        // setProducts(BackupDataProducts);
      }
    };

    
    fetchProducts();
  }, []);

  // fetch category
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products/categories");
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await response.json();
        // console.log(data);

        setAllCategory([...data, { id: 0, name: "all" }]);
      } catch (error) {
        console.error("Error during Fetching", error);
      }
    };

    fetchCategories();
  }, []);

  return <ProductContext.Provider value={{ products, allCategory }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
