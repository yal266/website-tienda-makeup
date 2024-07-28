import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductsList/ProductCard";
import { fetchProducts } from "@services/ProductsServiceList";
import Loading from "../components/common/Cargando/Loading";

const ProductListMain = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null); // Manejo de errores
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productosData = await fetchProducts();
        console.log("Productos en ProductList:", productosData);
        setProductos(productosData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) return <Loading />; // Mostrar indicador de carga
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-5 section">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListMain;
