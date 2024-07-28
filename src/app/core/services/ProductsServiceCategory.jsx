import { API_BASE_URL, PRODUCTS_ENDPOINT } from "../api/APIweb";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${PRODUCTS_ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Datos recibidos de la API:", data);
    
    // Extraer categorías únicas (product_types)
    const categories = [...new Set(data.map(product => product.product_type))];
    return categories.map((category, index) => ({
      idcategoria: index,
      nombre: category
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
