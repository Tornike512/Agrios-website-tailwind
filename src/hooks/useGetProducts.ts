import axios from "axios";
import { TProducts } from "src/types/Types";
import { useEffect, useState } from "react";

export default function useGetProducts() {
  const [products, setProducts] = useState<TProducts[]>([]);

  async function getProducts() {
    try {
      const response = await axios.get(
        "http://localhost:5000/products/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
