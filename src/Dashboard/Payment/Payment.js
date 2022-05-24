import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: myorderProduct,
    refetch,
  } = useQuery("product", () =>
    fetch(`http://localhost:5000/myorderPement/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //   console.log(myorderProduct);

  return (
    <div>
      <div className="grid gird-cols-2 md:grid-cols-2 mx-36 gap-2 mt-6">
        <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm text-start">
            <div class="py-3 px-6 border-b border-gray-300">
              Payment for Personal Information
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {myorderProduct?.name}
              </h5>
              <p class="text-gray-700 text-base">
                Phone:{myorderProduct?.phone}
              </p>
              <p class="text-gray-700 text-base">
                Email: {myorderProduct?.email}
              </p>
              <p class="text-gray-700 text-base">
                Address: {myorderProduct?.address}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div class="py-3 px-6 border-b border-gray-300">Pay Now</div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Special title treatment
              </h5>
              <p class="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-tahitiColor text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
