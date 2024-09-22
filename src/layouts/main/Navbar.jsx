import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, Drawer,  Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBookmarkOutline, IoCloseOutline } from "react-icons/io5";
import useAuth from "../../component/hooks/UseAuth";
import userLogo from '../../assets/hardy.png'
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
import { GrDashboard } from "react-icons/gr";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  // mobile
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // mobile end

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              <img className=" lg:ml-28" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              {" "}
              <Link to="/">Home</Link>{" "}
            </button>
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              {" "}
              <Link to="/booktable">Book A Table</Link>{" "}
            </button>
            <button className="hover:text-blue-600 transition text-[20px] font-[500px] duration-300">
              {" "}
              <Link to="/foods"> Food </Link>{" "}
            </button>
          </div>

          {/* Login Button (Desktop) */}
          <div className=" flex gap-[16px] lg:mr-28">
            <button className="bg-primary p-2 rounded-lg border-b-4 text-[#F8FAFC] border-2 border-[#334A55] md:block hidden">
              {" "}
              Download App{" "}
            </button>

            {/* login logic */}
              
              {
                user ? (
                  <ProfileDrawer/>
                ) : 
                <Link to='/auth/login' className=" flex justify-center items-center" > <button className="bg-primary p-2 rounded-lg border-b-4 text-[#F8FAFC] border-2 border-[#334A55]" > Login </button> </Link>
              }
     
            
         
         
             {/* lg device */}
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div>
              <Button type="primary" onClick={showDrawer}>
                <GiHamburgerMenu />
              </Button>
              <Drawer title=" Mobile Device " onClose={onClose} open={open}>
                <div className=" flex flex-col">
                  <button className=" text-2xl text-black font-medium">
                    {" "}
                    <Link to='/' > Home </Link>{" "}
                  </button>
                  <button className=" text-2xl text-black font-medium mt-3">
                    {" "}
                    <Link to='/booktable' > Book A Table </Link>{" "}
                  </button>
                  <button className=" text-2xl text-black font-medium mt-3">
                    {" "}
                    <Link to='/foods' > Food </Link>{" "}
                  </button>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

}





// profile section start

const ProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    toast.success(' LogOut Successfully ')
    .error(error =>{error})
}

  return (
    <>
      <Space>

          
      <button 
        onClick={showDrawer}
      className='bg-white p-2 rounded-lg border-b-4 text-[#334A55] border-2 border-[#334A55]' > My Profile </button>
        {/* <Button  onClick={showDrawer}>
        <button className='bg-white p-2 rounded-lg border-b-4 text-[#334A55]' > My Profile </button>
        </Button> */}
      </Space>
      <Drawer
        title="Profile Drawer"
        placement="right"
        closable={true} 
        onClose={onClose}
        open={open}
        style={{backgroundColor:'grey'}}
        closeIcon={<IoCloseOutline className=" h-6 w-6  rounded bg-black text-white border-2"/>}
      >

            <div className=" flex justify-center mt-3" >
            <img 
            className=" w-24 h-24 rounded-full bg-cover"
            src={user?.photoURL ? user?.photoURL : userLogo } alt="User Photo" />
            </div>

        <p className=" text-center text-lg font-semibold mt-4" > {user?.displayName} </p>
        
              <button className=" flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
                     <BiUserCircle/>
                    <Link> Personal Details </Link>
                  </button>

                  <button className=" flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
                  <IoBookmarkOutline />
                    <Link> Booking History </Link>
                  </button>   


                  <button className=" flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
                  <MdOutlineFavorite />
                    <Link> Favorite </Link>
                  </button>

                  <button className=" flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
                  <GrDashboard/>
                    <Link to={'/dashboard/dashboardHome'} > Dashboard </Link>
                  </button>


                  <button 
                  
                   onClick={handleLogOut}
                  className=" flex items-center gap-2 mt-4 text-[#F8FAFC] text-[25px]">
                  <CiLogout />
                    <Link> Logout </Link>
                  </button>

      </Drawer>
    </>
  );
};

// profile section end