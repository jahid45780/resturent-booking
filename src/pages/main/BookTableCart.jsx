import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookTableCart = ({tableBook}) => {

    

    const {title, image, description, price} = tableBook;

    return (
        <div>
                  <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm  border-r-2 border-t-2 border-gray-400">
       
       <Link >
 <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
    <img  className=" w-full h-full rounded-md bg-cover hover:scale-110 duration-300 "
   alt="food"
   src={image} />
 </div>
 </Link>

 <div className="flex flex-col mt-4">
  <Link >  <h2 className="text-xl font-bold mb-2 truncate"> {title} </h2> </Link>
   <p className="text-gray-600 text-sm mb-2 line-clamp-2">
   {description.slice(0,50)}
   </p>
   <h4 className="text-lg font-custom mb-2">$ {price} </h4>

   <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
       Booking
   </button>
 </div>
</div>
        </div>
    );
};

export default BookTableCart;