import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../core/services/ProductsServiceCategory";
import Shoproductos from "../pages/Tienda/Shoproductos";

const ShoproductosMain = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Manejo de errores
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log("Categorias shoproductos", fetchedCategories);
        setCategories(fetchedCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);                   

  if (isLoading) return <div>Cargando...</div>; // Mostrar indicador de carga
  if (error) return <div>Error: {error}</div>; 

  return (
    <Shoproductos categories={categories} onCategorySelect={onCategorySelect} />
  );
};

export default ShoproductosMain;
