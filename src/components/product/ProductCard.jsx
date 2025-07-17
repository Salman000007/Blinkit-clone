import React from 'react'
import { Link } from 'react-router-dom'
 
const ProductCard = ({product}) => {
  return (
    <div> <div className="border p-4 rounded shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <img
      src={product?.images[0]}
      alt={product?.title}
      className="h-40 object-contain mx-auto"
      loading="lazy"
    />
    <h2 className="font-bold mt-2">{product?.title}</h2>
    <p className="text-green-700 font-semibold">${product?.price}</p>
    <p className="overflow-hidden text-ellipsis break-words line-clamp-2 text-sm text-gray-600">
      {product?.description}
    </p>
    <Link
      to={`/product/${product?.id}`}
      className="mt-3 block text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
    >
      View Details
    </Link>
  </div></div>
  )
}

export default ProductCard