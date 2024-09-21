import { useState } from 'react'
// Components

import { AiOutlineBars } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logoDasbord.png'
import { RiDashboardHorizontalLine, RiMenuAddFill } from 'react-icons/ri';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdOutlineBorderColor } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';



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
      <div className='bg-secondary text-gray-800 flex justify-between md:hidden'>
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-secondary shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <Link to={'/'} >
          <div className=' flex justify-center items-center'  >
           <img src={logo} alt="logo" />
          </div>
          </Link>

          {/* Nav Items */}

          <div  className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg' >
          <NavLink className='flex  items-center justify-center space-l-3 gap-2'  to='/dashboard/dashboardHome' > <RiDashboardHorizontalLine />  Dashboard </NavLink> 
         </div>

         <div className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg'  >
          <NavLink className='flex  items-center justify-center space-l-3 gap-2'  > <FaCircleDollarToSlot /> Earnings </NavLink> 
         </div>


         <div className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg'  >
          <NavLink className='flex  items-center justify-center space-l-3 gap-2' > <IoRestaurantOutline/>  Restaurant </NavLink> 
         </div>


       <div className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg'  >
          <NavLink className='flex  items-center justify-center space-l-3 gap-2'  to='/dashboard/add-menu' > <RiMenuAddFill /> Add Menu </NavLink> 
         </div>


         <div className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg'  >
          <NavLink className='flex  items-center justify-center gap-2 ' to='/dashboard/order-details' > <MdOutlineBorderColor/> Order Details   </NavLink> 
         </div>

       
           <>
           


         
           </>
     
        
        </div>

        <div>
          <hr />


         <button className='flex w-full items-center px-4 py-2 mt-5 text-white text-2xl shadow-lg'>
         <CiLogout />
              
            <span className='mx-4 font-medium'> Log Out </span>
          </button>
   


        
        </div>
      </div>
    </>
  )
}

export default Sidebar
