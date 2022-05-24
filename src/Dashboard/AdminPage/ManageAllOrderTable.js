import React from "react";

const ManageAllOrderTable = ({ allorder }) => {
  return (
    <table className="min-w-full border text-center ">
      <thead className="border-b">
        <tr>
          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
          >
            Image
          </th>
          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
          >
            Prosduct Name
          </th>
          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
          >
            Price
          </th>
          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
          >
            Quantity
          </th>

          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4"
          >
            Manage Users
          </th>
        </tr>
      </thead>
      <tbody>
        {allorder?.map((item) => {
          return (
            <tr className="border-b" key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                <img
                  src={item.img}
                  alt=""
                  style={{ width: "40px", height: "50px" }}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                {item.productName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                {item.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                {item.quantity}
              </td>

              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                <button
                  type="button"
                  className="inline-block hover:bg-primary hover:text-white border border-primary font-bold text-center  mr-2 px-6 py-2 font-medium text-xs leading-tight  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Delete Order
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ManageAllOrderTable;
