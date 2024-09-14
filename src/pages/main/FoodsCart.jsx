/* eslint-disable react/prop-types */
const FoodsCart = ({cart}) => {

    const { title, image, description, price} = cart;

    return (
      <div>
         <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm ">
   
   <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
      <img  className=" w-full h-full rounded-md bg-cover"
     alt="food"
     src={image} />
   </div>


   <div className="flex flex-col mt-4">
     <h2 className="text-xl font-bold mb-2 truncate"> {title} </h2>
     <p className="text-gray-600 text-sm mb-2 line-clamp-2">
       {description.slice(0,50)}
     </p>
     <h4 className="text-lg font-bold mb-2">$ {price} </h4>

     <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
       Order Now
     </button>
   </div>
 </div>
      </div>
    );
};

export default FoodsCart;