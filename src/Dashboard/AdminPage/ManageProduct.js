import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Component/Loading";
import ManageProductTable from "./ManageProductTable";

const ManageProduct = () => {
  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery("product", () =>
    fetch(`https://lit-thicket-98954.herokuapp.com/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto px-4  py-12 h-screen overflow-y-scroll">
      <h1 className="text-2xl text-secondary font-bold text-center uppercase mb-5">
        Manage All Order
      </h1>

      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden ">
              <ManageProductTable product={product} refetch={refetch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
