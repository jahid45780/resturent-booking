import { useState } from "react";


export default function AddMenu() {

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const products = Array(12).fill({
    name: "Spinach & Mushroom",
    price: "$10.99",
    imageUrl:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg", // Placeholder for product images
  });

  const categories = ["ALL", "PANT", "CLOTH", "WATCH", "COSMETICS", "JEWELRY"];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);


  return (
    <div>

<div className="p-6 max-w-7xl mx-auto bg-white shadow-md rounded-md">
      <div className="flex justify-between mb-4">
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add New Category
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add New Item
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">All Products</h2>

      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-2 w-full bg-gray-300 text-gray-700 py-2 rounded-md">
              Edit
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1 ? "bg-gray-300" : "bg-gray-800 text-white"
          }`}
        >
          Prev
        </button>

        <div className="space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page ? "bg-gray-800 text-white" : "bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages ? "bg-gray-300" : "bg-gray-800 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>

    </div>
  )
}
