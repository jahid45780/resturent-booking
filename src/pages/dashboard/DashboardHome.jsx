import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant, MdRestaurantMenu } from "react-icons/md";

export default function DashboardHome() {
  return (
    <div>

<div className="p-6  min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="bg-primary text-white p-6 rounded-lg">
         
   
          <div className=" flex items-center gap-3" >
            <div>
            <MdOutlineTableRestaurant className=" flex justify-center   w-10 h-10 rounded-full bg-white text-2xl p-2 text-black" />
            </div>

               
               <div>
               <p className="text-lg">Total Order</p>
               <p className="text-3xl font-bold">$78,464</p>
               </div>
            
          </div>
       
        </div>

        <div className="bg-primary text-white p-6 rounded-lg">
         
   
         <div className=" flex items-center gap-3" >
           <div>
           <MdRestaurantMenu className=" flex justify-center   w-10 h-10 rounded-full bg-white text-2xl p-2 text-black" />
           </div>

              
              <div>
              <p className="text-lg"> Total Order </p>
              <p className="text-3xl font-bold">$99,464</p>
              </div>
           
         </div>
      
       </div>

      </div>

      {/* Recent Orders Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Order List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-sm uppercase tracking-wider">
                <th className="p-3">Serial</th>
                <th className="p-3">Item</th>
                <th className="p-3">Buyer Email</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">#0{index + 2}</td>
                  <td className="p-3">
                    <img
                      src="https://i.ibb.co.com/7KydpWC/mexican-food.jpg"
                      alt="item"
                      className="inline-block rounded-full w-8 h-8"
                    />
                    <span className="ml-2">Order {index + 1}</span>
                  </td>
                  <td className="p-3">info@gmail.com</td>
                  <td className="p-3">11 Oct 24, 11:10PM</td>
                  <td className="p-3">$152</td>
                  <td className="p-3">
                    < IoEyeOutline className="text-xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
  )
}
