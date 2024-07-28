import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../core/services/ProductsServiceCategory";
import ButtonCategory from "../components/common/ButtonShop/ButtonCategory";
import Loading from "../components/common/Cargando/Loading";

const ButtonCategoryMain = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Manejo de errores
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log("Categoria botones", fetchCategories);
        setCategories(fetchedCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (isLoading) return <Loading />; // Mostrar indicador de carga
  if (error) return <div>Error: {error}</div>;

  return (
    <ButtonCategory
      categories={categories}
      onCategorySelect={onCategorySelect}
    />
  );
};

export default ButtonCategoryMain;
