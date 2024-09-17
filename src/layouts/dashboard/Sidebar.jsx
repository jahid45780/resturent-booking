import { useState } from 'react'
// Components

import { AiOutlineBars } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { MdMenuBook } from 'react-icons/md';
import { CiDollar } from 'react-icons/ci';
import { FaBorderNone } from 'react-icons/fa';
import logo from '../../assets/logo.png'



// Icons




const Sidebar = () => {
  

//   const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)





  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>

    
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
   
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#FDFDFD] shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
           <img className=' flex justify-center items-center mx-4' src={logo} alt="logo" />
          </div>

          {/* Nav Items */}

      

       <div className=' text-lg  lg:-ml-10 text-center  p-2 mt-6' >
          <NavLink className='flex  items-center justify-center space-l-3 gap-2'  to='/dashboard/add-menu' > < MdMenuBook className=' text-2xl' /> Add Menu </NavLink> 
         </div>

         <div className=' text-lg    text-[#3E3E3E] lg:-ml-7  text-center  mt-2' >
          <NavLink className='flex  items-center justify-center lg:mr-9 gap-2' to='/dashboard/earning' > <CiDollar className=' text-2xl' />  Earning </NavLink> 
         </div>

         <div className='text-lg  text-[#3E3E3E] lg:-ml-7  text-center p-2  mt-2' >
          <NavLink className='flex  items-center justify-center lg:mr-9 gap-2 lg:ml-9' to='/dashboard/order-details' > <FaBorderNone className=' text-2xl' /> Order Details   </NavLink> 
         </div>

       
           <>
           


         
           </>
     
        
        </div>

        <div>
          <hr />


          <Link to='/' >
         <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <IoIosArrowBack className='w-5 h-5' />
              
            <span className='mx-4 font-medium'> Back to home </span>
          </button>
         </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
