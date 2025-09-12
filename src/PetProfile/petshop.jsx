// PetShop.jsx
import React, { useState } from 'react';

const PetShop = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const categories = ['All Products', 'Food', 'Toys', 'Accessories', 'Pet Houses'];

  const petProducts = [
    { id: 1, name: "Premium Dog Food - Chicken & Rice", category: "Food", rating: 4.9, reviewCount: 98, price: 24.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop" },
    { id: 2, name: "Interactive Cat Feather Toy", category: "Toys", rating: 4.7, reviewCount: 68, price: 12.99, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop" },
    { id: 3, name: "Adjustable Dog Collar - Leather", category: "Accessories", rating: 4.8, reviewCount: 254, price: 19.99, image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop" },
    { id: 4, name: "Cozy Pet Bed - Memory Foam", category: "Pet Houses", rating: 4.7, reviewCount: 70, price: 49.99, image: "https://images.unsplash.com/photo-1559013517-6d6f4bd1f423?w=400&h=300&fit=crop" },
    { id: 5, name: "Cat Scratching Post Tower", category: "Toys", rating: 4.6, reviewCount: 92, price: 39.99, image: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?w=400&h=300&fit=crop" },
    { id: 6, name: "Rubber Chew Toy - Dental Health", category: "Toys", rating: 4.8, reviewCount: 97, price: 8.99, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop" },
    { id: 7, name: "Outdoor Dog House - Waterproof", category: "Pet Houses", rating: 4.5, reviewCount: 45, price: 199.99, image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop" },
    { id: 8, name: "Natural Cat Treats - Salmon", category: "Food", rating: 4.2, reviewCount: 23, price: 14.99, image: "https://images.unsplash.com/photo-1573148164257-8a2b173be464?w=400&h=300&fit=crop" }
  ];

  const filteredProducts = activeCategory === 'All Products' 
    ? petProducts 
    : petProducts.filter(product => product.category === activeCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-400"}>★</span>);
    }
    return stars;
  };

  return (
    <div className="pet-shop-section mt-16">
      <div className="shop-header text-center mb-8">
        <h2 className="shop-title text-3xl font-bold text-white mb-4">Pet Shop</h2>
        <p className="shop-subtitle text-gray-300 mb-6">Everything your furry friends need to stay happy and healthy</p>

        <div className="category-filters flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`category-button px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? 'bg-green-400 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card bg-gray-800 rounded-xl p-4 border border-green-400/20 hover:border-green-400/40 transition-colors">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="product-name text-white font-semibold mb-2">{product.name}</h3>
            <div className="product-rating flex items-center gap-2 mb-2">
              <div className="stars flex">{renderStars(product.rating)}</div>
              <span className="review-count text-gray-400 text-sm">({product.reviewCount})</span>
            </div>
            <div className="product-price text-green-400 font-bold text-xl mb-4">${product.price}</div>
            <button className="add-to-cart-btn w-full bg-green-400 text-gray-900 py-2 rounded-lg hover:bg-green-500 transition-colors">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetShop;