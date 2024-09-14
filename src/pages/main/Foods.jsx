import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import FoodsCart from "./FoodsCart";
import Pagination from "../../component/pagination/Pagination";

export default function Foods() {


  const [foods, setFoods] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPage] = useState(8)

  useEffect(()=> {

    fetch('food.json')
    .then(res => res.json())
    .then(data => setFoods(data) )

  },[])


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost =  foods.slice(firstPostIndex, lastPostIndex)
 


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 100; // Adjust scroll distance as needed
    } else {
      scrollRef.current.scrollLeft += 100;
    }
  };

  return (
     <div>

  {/* first part start */}
<div className="bg-[#8ABA51] " >

<div className="flex items-center justify-center py-4 mt-9 h-16">
    
    

       {/* btn right */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide w-full items-center justify-between bg-[#8ABA51] p-2"
      >

<button
        onClick={() => scroll('left')}
        className=" p-2 rounded-l-lg"
      >
       <h2 className="mx-24" > <MdOutlineKeyboardArrowLeft className=" text-4xl bg-[#81aa4f] rounded text-white" /> </h2>
      </button>
         {/* main content filter btn */}
          <div className=" flex gap-2" >
          {['Pizza', 'Rice', 'Kabab', 'Rice', 'Sushi', 'Fry', 'Chicken'].map(
          (item, index) => (
            <div
              key={index}
              className="min-w-max px-4 py-2 bg-gray-200 text-[#334A55] font-semibold rounded-md hover:bg-gray-300"
            >
              {item}
            </div>
          
        

          )
        )}
          </div>
         {/* btn left */}
         
          <button
        onClick={() => scroll('left')}
        className="p-2"
      >
        <h2 className="mx-24" > <MdOutlineKeyboardArrowRight  className=" text-4xl bg-[#81aa4f] rounded text-white" /> </h2>
      </button>
       
      </div>
 </div>

    </div>

 {/* first part end */}


{/* search title food cart map start */}
<section className="max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-6 mt-8 space-y-4 md:space-y-0">
    {/* Title Section */}
    <h1 className=" text-5xl font-bold text-center md:text-left">
      <span className="text-gray-800">Explore </span>
      <span className="text-[#8ABA51]">Yummy Recipe</span>
    </h1>

    {/* Search Bar Section */}
    <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 bg-white w-full max-w-xs sm:max-w-sm md:max-w-md">
      <input
        type="text"
        placeholder="Search food"
        className="flex-grow outline-none px-4 text-gray-600"
      />
      <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-200">
        <IoIosSearch />
      </button>
    </div>
  </div>
</section>

{/*search item food cart map end */}



{/* product item food cart map start */}
<section className=" grid lg:grid-cols-3 grid-cols-1 gap-2 mt-5 max-w-6xl mx-auto" >
  {
    currentPost.map((food) => (
      <FoodsCart key={food.id} cart={food} />
    ))
  }
</section>


<div className=" flex justify-center items-center py-12" >
<Pagination 
      totalPosts={foods.length}
      postsPerPage={postsPerPage}
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
      />
</div>



{/* product item food cart map end */}

   


     </div>
  )
}
