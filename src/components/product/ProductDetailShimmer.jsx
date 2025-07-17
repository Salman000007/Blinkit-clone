const ProductDetailShimmer = () => {
    return (
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-3xl mt-4 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
          <div className="flex flex-col gap-4">
            <div className="w-full h-96 bg-gray-200 rounded-2xl"></div>
            <div className="flex gap-2">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-6 bg-gray-200 rounded-full"
                ></div>
              ))}
            </div>
          </div>
  
          <div className="flex flex-col justify-between">
            <div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-6"></div>
  
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-12 bg-gray-200 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
  
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
  
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-1">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
  
              <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
  
            <div className="mt-8">
              <div className="h-12 bg-gray-200 rounded-xl mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailShimmer;
  