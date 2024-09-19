import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { useLoaderData, useParams } from "react-router-dom";
import photo from '../../assets/hardy.png'


const BookTableDetail = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const { id } = useParams(); // Get the id from the route parameters
    const menuSingleData = useLoaderData();
    const idInd = parseInt(id);
  
    const menuData = menuSingleData.find((menuData) => menuData.id === idInd);
  
    const { image, title, price, rating, description } = menuData;

    const images = [
       image,
       "https://restaurantengine.com/wp-content/uploads/2016/01/The-Best-Online-Booking-App-For-Your-Restaurant-Website-660x452.jpg",
       "https://media-cdn.tripadvisor.com/media/photo-s/21/a2/c1/c9/bar.jpg"
    ];
  
    const containerStyle = {
      width: '100%',
      height: '300px'
    };
  
    const center = {
        lat: 23.8041,
        lng: 90.4152
    };
  
    const handlePrev = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  
    const handleNext = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };

    return (
        <div className=" max-w-6xl mx-auto mt-8" >
         <div className="flex flex-col lg:flex-row gap-4">
      {/* Image Slider Section */}
      <div className="lg:w-2/3 mt-7">
        <div className="relative w-full h-80">
          <img
            src={images [currentImage] }
            alt="Restaurant"
            className="object-cover w-full duration-300 rounded-lg h-full"
          />
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#8ABA51] rounded-full text-white px-2 py-1">
          <IoIosArrowBack />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#8ABA51] rounded-full text-white px-2 py-1">
          <IoIosArrowForward />
          </button>
        </div>


       {/* content */}
    
    <section>
        
   
      <h2 className=" font-semibold text-[#334A55] text-3xl mt-5">  {title} </h2>
      <div className=" h-1 bg-[#758888] mx-auto mt-2"></div>

    
      <div className="flex flex-col md:flex-row justify-between gap-14 mt-5 items-center  p-4 rounded-lg shadow-lg">
      {/* Address and Booking Info */}
      <div className="flex flex-col md:w-1/2 space-y-2">
        <div className="text-sm">
          <p className="text-[16px] text-[#334A55]">360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865</p>
        </div>
       {/* Booking Form */}
        <div>
        <div className="flex space-x-2 mt-3">
          <input
            type="date"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="time"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        <div className=" flex gap-2 items-center p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" >
        <LuUsers2 />
        <select className="">
           
           <option value="2">2</option>
           <option value="4">4</option>
           <option value="6">6</option>
           <option value="8">8</option>
         </select>
        </div>
        </div>

      
      </div>
      </div>

   
      <p className=" text-[16px] text-[#334A55]">
       {description}  <span className="text-green-600 font-semibold cursor-pointer">Read More...</span>
        </p>
        
  
    </div>

    {/* btn book  now */}

    <button className="w-full h-8 flex justify-center items-center bg-gray-500 text-white py-3 rounded-lg text-center hover:bg-gray-600">
  Book Now
</button>



    </section>
  
      </div>

      {/* Map and Opening Hours Section */}
      <div className="lg:w-1/3 p-4">

      <div className="text-center py-4">
      <h2 className="text-xl font-semibold text-gray-700">Here to Find</h2>
      <div className=" h-1 bg-green-500 mx-auto mt-2"></div>

    </div>

        {/* Google Map */}
        <div className="h-64 mb-4">
          <LoadScript>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Opening Hours */}
        <div className=" p-4 rounded">
      
        <div className="text-center py-4">
      <h2 className="text-xl font-semibold text-gray-700 mt-7">Opening Hours</h2>
      <div className=" h-1 bg-green-500 mx-auto mt-2"></div>
    </div>

          <ul className="mt-2 text-gray-700">
            <li className="flex justify-between">Saturday: <span>10:00 AM - 12:00 PM</span></li>
            <li className="flex justify-between">Sunday: <span>11:00 AM - 3:00 AM</span></li>
            <li className="flex justify-between">Monday: <span>10:00 AM - 12:00 PM</span></li>
            <li className="flex justify-between">Tuesday: <span>10:00 AM - 3:00 AM</span></li>
            <li className="flex justify-between">Wednesday: <span>11:00 AM - 3:00 AM</span></li>
            <li className="flex justify-between">Thursday: <span>11:00 AM - 3:00 AM</span></li>
            <li className="flex justify-between">Friday: <span>11:00 AM - 3:00 AM</span></li>
          </ul>
        </div>
      </div>
    </div>

{/* part 2 */}

<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Review</h2>
        <div className="flex items-center text-gray-600 mt-2">
          <span className="text-3xl font-bold text-gray-800">4.8</span>
          <svg className="w-6 h-6 text-blue-500 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927C9.435 2.064 10.565 2.064 10.951 2.927L12.317 6.03C12.508 6.48 12.948 6.763 13.432 6.763H16.719C17.67 6.763 18.074 7.944 17.37 8.472L14.476 10.708C14.096 11.008 13.93 11.526 14.09 12.014L15.465 15.09C15.829 16.084 14.814 16.964 13.945 16.39L10.999 14.463C10.577 14.2 10.023 14.2 9.601 14.463L6.655 16.39C5.786 16.964 4.771 16.084 5.135 15.09L6.51 12.014C6.67 11.526 6.504 11.008 6.124 10.708L3.23 8.472C2.526 7.944 2.93 6.763 3.881 6.763H7.168C7.652 6.763 8.092 6.48 8.283 6.03L9.649 2.927H9.049Z" />
          </svg>
          <span className="text-lg">5,922 Reviews</span>
        </div>
      </div>

      {/* User Feedback Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">User Feedback</h3>
      
      {/* Individual Review */}
      <div className="space-y-6">
        {[1, 2, 3].map((review) => (
          <div key={review} className="flex items-start space-x-4 pb-4 border-b border-[#090B0E]">
            <img 
              src={photo} 
              alt="User" 
              className="rounded-full w-12 h-12" 
            />
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-800">Dianne Russell</h4>
                  <span className="text-sm text-[#090B0E]">Just now</span>
                </div>
              </div>
              {/* Star Ratings */}
              <div className="flex items-center my-1">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.435 2.064 10.565 2.064 10.951 2.927L12.317 6.03C12.508 6.48 12.948 6.763 13.432 6.763H16.719C17.67 6.763 18.074 7.944 17.37 8.472L14.476 10.708C14.096 11.008 13.93 11.526 14.09 12.014L15.465 15.09C15.829 16.084 14.814 16.964 13.945 16.39L10.999 14.463C10.577 14.2 10.023 14.2 9.601 14.463L6.655 16.39C5.786 16.964 4.771 16.084 5.135 15.09L6.51 12.014C6.67 11.526 6.504 11.008 6.124 10.708L3.23 8.472C2.526 7.944 2.93 6.763 3.881 6.763H7.168C7.652 6.763 8.092 6.48 8.283 6.03L9.649 2.927H9.049Z" />
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-[#090B0E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>
    );
};

export default BookTableDetail;