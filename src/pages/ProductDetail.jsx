import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import useProduct from "../hooks/useProduct";
import Toast from "../components/ui/Toast";
import ProductDetailShimmer from "../components/product/ProductDetailShimmer";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const { product, loading } = useProduct(id);

  if (loading) {
    return <ProductDetailShimmer />;
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setShowToast(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-3xl mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <img
            src={product?.images[0]}
            alt={product?.title}
            className="w-full h-96 object-contain rounded-2xl border border-gray-200"
          />
          <div className="flex gap-2">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {product?.title}
            </h1>
            <p className="mt-2 text-gray-500">
              {product?.category} • {product?.brand}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">
                ★ {product?.rating}
              </span>
              <span className="text-gray-400 text-sm">
                ({product?.reviews?.length} reviews)
              </span>
            </div>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium">Availability</p>
                <p>{product?.availabilityStatus}</p>
              </div>
              <div>
                <p className="font-medium">Stock</p>
                <p>{product?.stock} units</p>
              </div>
              <div>
                <p className="font-medium">Minimum Order</p>
                <p>{product?.minimumOrderQuantity} pcs</p>
              </div>
              <div>
                <p className="font-medium">Dimensions</p>
                <p>
                  {product?.dimensions.width} x {product?.dimensions.height} x{" "}
                  {product?.dimensions.depth} cm
                </p>
              </div>
              <div>
                <p className="font-medium">Weight</p>
                <p>{product?.weight} g</p>
              </div>
              <div>
                <p className="font-medium">SKU</p>
                <p>{product?.sku}</p>
              </div>
              <div>
                <p className="font-medium">Barcode</p>
                <p>{product?.meta?.barcode}</p>
              </div>
              <div>
                <p className="font-medium">Warranty</p>
                <p>{product?.warrantyInformation}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-green-600 text-3xl font-bold">
                ${product?.price}
              </p>
              <p className="text-red-500 text-sm mt-1">
                {product?.discountPercentage}% off
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition-colors duration-300"
            >
              Add to Cart
            </button>
            <p className="text-sm text-gray-500">
              {product?.shippingInformation}
            </p>
            <p className="text-sm text-gray-500">
              Return Policy: {product?.returnPolicy}
            </p>
          </div>
          {showToast && (
            <Toast
              message="Item added to cart successfully!"
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
