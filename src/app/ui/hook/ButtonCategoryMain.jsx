import React, { useState, useEffect } from "react";
import ButtonCategory from "../components/common/ButtonShop/ButtonCategory";
import Loading from "../components/common/Cargando/Loading";
import { fetchProducts } from "@services/ProductsServiceList";
import ProductTypeList from "./ProductTypeList";

const ButtonCategoryMain = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const sampleProducts = await fetchProducts();
        const uniqueCategories = [...new Set(sampleProducts.map(product => product.product_type))];
        setCategories(uniqueCategories.map(type => ({ product_type: type, name: type })));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);


  const handleCategorySelect = (productType) => {
    setSelectedCategory(productType);
  };


  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ButtonCategory
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      {selectedCategory && <ProductTypeList productType={selectedCategory} />}
    </div>
  );
};

export default ButtonCategoryMain;
