import React from "react";
import { useQuery } from "react-query";
import PageBanner from "../Component/PageBanner";
import Table from "./Share/Table";

const MyOrder = () => {
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("product", () =>
    fetch(`http://localhost:5000/myorder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div>
      <div className="container mx-auto px-4 md:px-20 py-12 h-screen overflow-y-scroll">
        <h1 className="text-2xl text-secondary font-bold text-center uppercase mb-5">
          My Orders
        </h1>

        <div className="flex flex-col ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden ">
                <Table products={products} refetch={refetch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
