import { IoEyeOutline } from "react-icons/io5";

export default function Earning() {
  return (
    <div>
        <div className="p-6  min-h-screen">
      {/* Earnings Header Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Earnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary text-white p-4 rounded-lg flex items-center justify-between">
            <p className="text-lg">Todays Earning</p>
            <p className="text-2xl font-bold">$3230</p>
          </div>
          <div className="bg-primary text-white p-4 rounded-lg flex items-center justify-between">
            <p className="text-lg">All Earning</p>
            <p className="text-2xl font-bold">$5230</p>
          </div>
        </div>
      </div>

      {/* Earnings Table Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-primary text-white text-left text-sm uppercase tracking-wider">
                <th className="p-3">Serial</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">#0{index + 2}</td>
                  <td className="p-3">Opu</td>
                  <td className="p-3">email@gmail.com</td>
                  <td className="p-3">11 Oct 2024</td>
                  <td className="p-3">$415</td>
                  <td className="p-3">
                    <IoEyeOutline className="text-xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-6 flex justify-center items-center">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          {[1, 2, 3, 4, 5].map((num) => (
            <li key={num}>
              <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                {num}
              </button>
            </li>
          ))}
          <li>
            <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 14.707a1 1 0 010-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
