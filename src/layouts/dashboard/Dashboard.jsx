import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Badge } from "antd";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
// import logo from '../../../public/photo/logo.png'

const Dashboard = () => {
    return (
        <div>
         

            <div className=" relative min-h-max md:flex" >
{/* slider side */}  <Sidebar/>
<div className="flex-1 items-center justify-between" >
 
 
  {/* header start */}
  <div className=" bg-secondary" >
    <section className=" flex items-center justify-around space-y-5">
      <div>
        <h1 className=" flex items-center text-4xl gap-2" > <MdOutlineDashboardCustomize /> Dashboard </h1>
      </div>

      <div>
       <Badge
         count={3}
       >
        <IoNotificationsCircle className=" text-5xl" />
       </Badge>
      </div>

    </section>
      {/* header end */}
  </div>

    <div className=" lg:ml-72 lg:m-20" >  {/* out let from dainamic contact */}  <Outlet></Outlet> </div>
</div>
</div>

        </div>
    );
};

export default Dashboard;
