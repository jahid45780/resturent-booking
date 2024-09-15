import { useState } from 'react';
import star from '../../assets/Four Star.png';
import love from '../../assets/Wishlist.png';
import { useLoaderData, useParams } from 'react-router-dom';

export default function Food() {
  const [count, setCount] = useState(0);

  const { id } = useParams(); // Get the id from the route parameters
  const menuSingleData = useLoaderData();
  const idInd = parseInt(id);

  const menuData = menuSingleData.find((menuData) => menuData.id === idInd);

  const { image, title, price, rating, description } = menuData;




  return (
    <div className="max-w-6xl mx-auto lg:py-28 m-2 mt-4">
      <section className="grid justify-items-center lg:grid-cols-2 gap-2 py-3 justify-center items-center">
        {/* Food Image */}
        <div className="flex justify-center object-cover m-3 ">
          <img src={image} alt="Chicken Curry Masala" className="w-full max-w-xs sm:max-w-md lg:max-w-[501px] h-auto lg:h-[601px] rounded shadow-lg object-cover" />
        </div>

        {/* Food Details */}
        <div>
        <h1 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-fontTitle text-center sm:text-left">
  {title}
</h1>

<div className="flex  items-center sm:flex-row sm:items-start  sm:justify-start justify-center text-center sm:text-left gap-3 mt-5">
  <img src={star} alt="Star Rating" className="w-20 flex justify-center" />
  <p className="text-[#334A55] text-2xl font-fontCustom lg:text-3xl">
    {rating}
  </p>
</div>


          <h1 className="text-[#000000] text-2xl lg:text-3xl mt-4 font-custom text-center sm:text-left"> $ {price} </h1>

          <h2 className="text-[#000000] font-semibold text-xl lg:text-[32px] text-center sm:text-left mt-6">Description</h2>
          <p className="text-secondary text-md lg:text-[32px] text-center sm:text-left mt-3">
             {description}
          </p>

          {/* Counter and Add to Cart Section */}
          <div className="flex items-center justify-between gap-4 mt-8 m-1 ">
            {/* Counter */}
            <div className=" flex border lg:w-[200px] h-14 border-[#334A55] rounded-lg">
              <button
                className="px-3 py-1 text-2xl  font-bold border-r border-[#334A55] hover:bg-[#334A55] hover:text-white"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <div className="px-4 text-2xl flex items-center font-semibold">{count}</div>
              <button
                className="px-3 py-1 text-2xl font-bold border-1 bg-primary text-white border-[#334A55] hover:bg-[#334A55] hover:text-white"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="px-6 py-2 bg-[#334A55] w-full h-14 text-white font-semibold rounded-lg hover:bg-[#456A74] transition">
              Add to Cart
            </button>

            {/* Wishlist Icon */}
            <div className="flex justify-end">
              <img  src={love} alt="Wishlist" className=" w-[100px] h-14 rounded cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

