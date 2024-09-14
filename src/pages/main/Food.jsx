import { useState } from 'react';
import food from '../../assets/food.png';
import star from '../../assets/Four Star.png';
import love from '../../assets/Wishlist.png';

export default function Food() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-6xl mx-auto lg:py-28 mt-4">
      <section className="grid justify-items-center lg:grid-cols-2 gap-2 py-3 justify-center items-center">
        {/* Food Image */}
        <div className="flex justify-center object-cover ">
          <img src={food} alt="Chicken Curry Masala" className=" w-[501px] h-[601.2px]  rounded shadow-lg" />
        </div>

        {/* Food Details */}
        <div className='w-[501px] h-[590px]' >
          <h1 className="text-[#000000] text-4xl lg:text-5xl font-bold">Chicken Curry Masala</h1>

          <div className="flex gap-3  items-center mt-3">
            <img src={star} alt="Star Rating" className="w-20" />
            <p className="text-[#334A55] text-2xl lg:text-3xl">(150 Reviews)</p>
          </div>

          <h1 className="text-[#000000] text-2xl lg:text-3xl mt-4 font-semibold">$222</h1>

          <h2 className="text-[#000000] font-semibold text-xl lg:text-[32px] mt-6">Description</h2>
          <p className="text-secondary text-md lg:text-[32px] mt-3">
            Our classic cheeseburger is made with a fresh, never-frozen beef patty that is cooked to perfection and topped
            with melted American cheese, lettuce, tomato, pickles, and onions.
          </p>

          {/* Counter and Add to Cart Section */}
          <div className="flex items-center justify-between gap-4 mt-8 ">
            {/* Counter */}
            <div className=" flex border lg:w-[222px] h-14 border-[#334A55] rounded-lg">
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

