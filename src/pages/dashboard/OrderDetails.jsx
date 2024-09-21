import { useState } from "react";
import { FaEye } from "react-icons/fa6";

export default function OrderDetails() {
  const [orders, setOrders] = useState([
    { id: "#01", product: "Hoodie", customer: "Farvez Sir", date: "11 Oct 2024", amount: "$52", status: "Pending" },
    { id: "#02", product: "Hoodie", customer: "Farvez Sir", date: "11 Oct 2024", amount: "$52", status: "Processing" },
    { id: "#03", product: "Hoodie", customer: "Farvez Sir", date: "11 Oct 2024", amount: "$52", status: "Delivered" },
    // Add more orders here...
  ]);

  const statuses = ["Pending", "Processing", "Delivered"];

  const handleStatusChange = (e, orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: e.target.value } : order
    );
    setOrders(updatedOrders);
  };
  return (
    <div>
       <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Orders List</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Feb 15, 2024
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Order ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Product</th>
              <th className="py-2 px-4 border-b border-gray-200">Customer Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Amount</th>
              <th className="py-2 px-4 border-b border-gray-200">Status</th>
              <th className="py-2 px-4 border-b border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="py-2 px-4 border-b border-gray-200">{order.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{order.product}</td>
                <td className="py-2 px-4 border-b border-gray-200">{order.customer}</td>
                <td className="py-2 px-4 border-b border-gray-200">{order.date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{order.amount}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(e, order.id)}
                    className={`py-1 px-2 rounded-md ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-red-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button className="text-gray-600">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md">1</button>
        <div className="space-x-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded-md ${
                page === 1 ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md">Next</button>
      </div>
    </div>
    </div>
  )
}
