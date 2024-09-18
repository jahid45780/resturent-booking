import profileImage from "../assets/bannerPro.png";
import mainImage from "../assets/banner.png"
import { IoIosSearch } from "react-icons/io";


const Banner = () => {
    return (
        <div className="p-4 lg:p-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
         
          {/* <div className="md:hidden lg:hidden flex mx-auto lg:mx-0 mt-3 w-full">
            <Input.Search
              className=""
              placeholder="Search food"
              maxLength={50}
              allowClear
              // style={{ height: 40 }}
            />
          </div> */}
    
    <div className=" md:hidden lg:hidden flex mx-auto lg:mx-0 mt-3 w-full  items-center space-x-2 border border-gray-300 rounded-full p-2 bg-white ">
            <input
              type="text"
              placeholder="Search food"
              className="flex-grow outline-none w-full px-4 text-gray-600"
            />
            <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-200">
              <IoIosSearch />
            </button>
          </div>

  
          <div className="text-center lg:text-left mt-10 lg:mt-0 lg:ml-8">
            <img
              className="hidden md:block lg:ml-64 -rotate-12 mt-4"
              src={profileImage}
              alt="Profile"
            />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Good <span className="text-[#8ABA51]">Booking</span>, Great <br />{" "}
              Memories
            </h1>
            <p className="text-[#232323] text-lg lg:text-xl mb-6">
              Enable diners to customize their booking by requesting a specific
              table location or view.
            </p>
            {/* <div className="hidden md:flex lg:flex md:w-full lg:w-[500px] mx-auto lg:mx-0">
              <Input.Search
                
                 size="large"
                placeholder="Search food"
                maxLength={50}
                allowClear
              />
            </div> */}
            
               {/* Search Bar Section */}
          <div className="  hidden md:flex lg:flex md:w-full  items-center space-x-2 border border-gray-300 rounded-full p-2 bg-white w-full">
            <input
              type="text"
              placeholder="Search food"
              className="flex-grow outline-none w-full px-4 text-gray-600"
            />
            <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-200">
              <IoIosSearch />
            </button>
          </div>


          </div>
          <div className=" md:hidden lg:hidden">
            <img
              className="md:hidden lg:hidden lg:ml-64 rotate-90 mt-24 mb-0"
              src={profileImage}
              alt="Profile"
            />
          </div>
          
          <div className="flex justify-center lg:justify-end -mt-28 md:mt-0 lg:mt-0">
            <img className="w-full lg:w-auto" src={mainImage} alt="Food Banner" />
          </div>
        </section>
      </div>
    );
};

export default Banner;