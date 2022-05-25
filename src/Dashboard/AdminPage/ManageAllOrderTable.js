import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ManageAllOrderTable = ({ allorder, refetch }) => {
  const deleteOrder = (id) => {
    Swal.fire({
      title: "<strong>Are you Sure Remove Order?</strong>",
      icon: "warning",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Delete",
      cancelButtonText: "No",
      cancelButtonAriaLabel: "Thumbs down",
    }).then((result) => {
      if (result.isConfirmed) {
        async function fetchFunction() {
          try {
            const response = await fetch(
              `https://lit-thicket-98954.herokuapp.com/allorder/${id}`,
              {
                // mode: "no-cors",
                method: "DELETE",
              }
            );
            const json = await response.json();
            refetch();
            console.log(json);
          } catch (err) {
            throw err;
            console.log(err);
          }
        }
        fetchFunction();
      }
    });
  };

  const shiftOrder = (id) => {
    fetch(`https://lit-thicket-98954.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

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
            className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
          >
            Pement
          </th>

          <th
            scope="col"
            className="text-x font-bold text-purple-900 uppercase px-6 py-4"
          >
            Manage All Order
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                {item.paid ? (
                  <p className="text-lg font-bold text-tahitiColor">
                    {item.status}
                  </p>
                ) : (
                  <p className="text-lg font-bold">Unpaid</p>
                )}
              </td>

              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                {item.paid && (
                  <button
                    onClick={() => shiftOrder(item._id)}
                    type="button"
                    className="inline-block hover:bg-primary hover:text-white border border-primary font-bold text-center  mr-2 px-6 py-2 font-medium text-xs leading-tight  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Shift
                  </button>
                )}
                <button
                  onClick={() => deleteOrder(item._id)}
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
