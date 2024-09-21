import { useState } from "react";

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        location: "",
        description: "",
        openingTime: "",
        closingTime: "",
        weekend: "Saturday",
        images: [],
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurant((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleImageUpload = (e, index) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...restaurant.images];
        updatedImages[index] = URL.createObjectURL(files[0]);
        setRestaurant((prev) => ({ ...prev, images: updatedImages }));
      };
    return (
        <div>
                <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
      <div className="grid grid-cols-5 gap-4 mb-4">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="border-2 border-dashed border-gray-300 flex items-center justify-center h-28"
            >
              {restaurant.images[index] ? (
                <img
                  src={restaurant.images[index]}
                  alt={` + upload-${index}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <label className="text-center text-gray-400 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                  Upload
                </label>
              )}
            </div>
          ))}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Restaurant Name</label>
        <input
          type="text"
          name="name"
          value={restaurant.name}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Type name here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Restaurant Location</label>
        <input
          type="text"
          name="location"
          value={restaurant.location}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Type location here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={restaurant.description}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Type description here..."
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">Opening Time</label>
          <input
            type="time"
            name="openingTime"
            value={restaurant.openingTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Closing Time</label>
          <input
            type="time"
            name="closingTime"
            value={restaurant.closingTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Weekend</label>
        <select
          name="weekend"
          value={restaurant.weekend}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      <div className="text-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </div>
    </div>
        </div>
    );
};

export default Restaurant;