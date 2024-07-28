import { API_BASE_URL, PRODUCTS_ENDPOINT } from "../api/APIweb";

export const fetchProductsType = async (productType) => {
  try {
    const response = await fetch(`${API_BASE_URL}${PRODUCTS_ENDPOINT}?product_type=${productType}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Productos de tipo ${productType}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching products of type ${productType}:`, error);
    throw error;
  }
};
