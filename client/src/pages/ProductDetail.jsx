// UI Only — Product detail page

import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import { formatPrice, formatDate } from '../utils/format';

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Product not found</h2>
          <Link to="/marketplace" className="text-purple-600 hover:underline">
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/marketplace"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 font-medium group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Marketplace
        </Link>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            <div>
              <div className="relative bg-slate-100 rounded-2xl overflow-hidden mb-4">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      currentImageIndex === index ? 'border-purple-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    {product.title}
                  </h1>
                </div>
                <button className="p-3 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  {formatPrice(product.price)}
                </p>
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  product.condition === 'Like New'
                    ? 'bg-green-100 text-green-700'
                    : product.condition === 'Good'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  Condition: {product.condition}
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-slate-900 mb-2">Seller Information</h3>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                    {product.seller.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{product.seller.name}</p>
                    <p className="text-sm text-slate-500">Listed on {formatDate(product.createdAt)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
                <p className="text-slate-700 leading-relaxed">{product.longDesc}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Contact Seller
                </button>
                <button className="py-4 px-6 border-2 border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              Similar Items 🔍
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
