import { Image } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Recipe = () => {
    return (
        <div>
        <section className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-6 mt-6">
  <h1 className="text-[32px] lg:text-[48px] text-center lg:text-left">
    Explore <span className="text-[#8ABA51]">Yummy Recipe</span>
  </h1>

 <Link to={'/foods'} >
 <button className="flex gap-2 items-center text-[16px] lg:text-[20px] mt-4 lg:mt-0">
    See All <IoIosArrowForward />
  </button>
 </Link>
</section>


  <section className=" grid lg:grid-cols-3 grid-cols-1 gap-2 mt-5" >


  <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
   
      <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
        {/* <img
          src=""
          className="object-contain object-center w-full h-full"
          alt="food"
        /> */}
        <Image 
        className="object-contain object-center w-full h-full"
        alt="food"
        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" ></Image>
      </div>


      <div className="flex flex-col mt-4">
        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          imperdiet lectus.
        </p>
        <h4 className="text-lg font-bold mb-2">$192.00</h4>
        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>


    <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
   
   <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
     {/* <img
       src=""
       className="object-contain object-center w-full h-full"
       alt="food"
     /> */}
     <Image 
     className="object-contain object-center w-full h-full"
     alt="food"
     src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" ></Image>
   </div>


   <div className="flex flex-col mt-4">
     <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
     <p className="text-gray-600 text-sm mb-2 line-clamp-2">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
       imperdiet lectus.
     </p>
     <h4 className="text-lg font-bold mb-2">$192.00</h4>
     <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
       Order Now
     </button>
   </div>
 </div>



 <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
   
   <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
     {/* <img
       src=""
       className="object-contain object-center w-full h-full"
       alt="food"
     /> */}
     <Image 
     className="object-contain object-center w-full h-full"
     alt="food"
     src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" ></Image>
   </div>


   <div className="flex flex-col mt-4">
     <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
     <p className="text-gray-600 text-sm mb-2 line-clamp-2">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
       imperdiet lectus.
     </p>
     <h4 className="text-lg font-bold mb-2">$192.00</h4>
     <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
       Order Now
     </button>
   </div>
 </div>


 <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
   
   <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
     {/* <img
       src=""
       className="object-contain object-center w-full h-full"
       alt="food"
     /> */}
     <Image 
     className="object-contain object-center w-full h-full"
     alt="food"
     src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" ></Image>
   </div>


   <div className="flex flex-col mt-4">
     <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
     <p className="text-gray-600 text-sm mb-2 line-clamp-2">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
       imperdiet lectus.
     </p>
     <h4 className="text-lg font-bold mb-2">$192.00</h4>
     <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
       Order Now
     </button>
   </div>
 </div>


 </section>
        </div>
    );
};

export default Recipe;