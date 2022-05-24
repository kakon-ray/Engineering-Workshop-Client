import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useAdmin from "../../Hook/useAdmin";

const MakeAdminTable = ({ user, refetch }) => {
  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "You do not make admin anywhere",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Make Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
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
              Name
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Email
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
          {user?.map((item) => {
            return (
              <tr className="border-b" key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "40px", height: "50px" }}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                  {item.email}
                </td>

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                  {item.roll !== "admin" ? (
                    <button
                      onClick={() => makeAdmin(item.email)}
                      type="button"
                      className="inline-block hover:bg-primary hover:text-white border border-primary font-bold text-center  mr-2 px-6 py-2 font-medium text-xs leading-tight  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <h1 className="text-xl font-bold text-tahitiColor">
                      Admin
                    </h1>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdminTable;
