import { useEffect, useState } from "react";
import { PRODUCT_API } from "../config/constants";

const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    if (!id) return;
    try {
      const res = await fetch(`${PRODUCT_API}${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProduct;
