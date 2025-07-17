import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/product/ProductCard";
import ProductCardShimmer from "../components/product/ProductCardShimmer";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="p-6 m-8">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 })?.map((_, i) => (
            <ProductCardShimmer key={i} />
          ))}
        </div>
      </div>
    );
  }
  if (error) {
    return <p className="text-center text-red-600">Failed to load products.</p>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }
  return (
    <div className="flex flex-wrap bg-white m-4 p-4">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
