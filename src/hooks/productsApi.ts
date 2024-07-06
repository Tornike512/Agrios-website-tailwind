import axios from "axios";
import { TProducts } from "src/types/Types";
import { useEffect, useState } from "react";

export async function getProducts() {
  const [products, setProducts] = useState<TProducts[]>([]);

  try {
    const response = await axios.get("http://localhost:5000/products/products");
    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
