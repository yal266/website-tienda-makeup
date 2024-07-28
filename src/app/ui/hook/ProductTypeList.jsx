import { useEffect, useState } from "react";
import { fetchProductsType } from "../../core/services/ProductsServiceType";
import Loading from "../components/common/Cargando/Loading";
import ProductCard from "../components/ProductsList/ProductCard";

const ProductTypeList = ({ productType }) => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (productType) {
          const productosData = await fetchProductsType(productType);
          console.log(`Productos de tipo ${productType}:`, productosData);
          setProductos(productosData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [productType]);

  if (isLoading) return <Loading />;
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

export default ProductTypeList;
                                                                                                                                  