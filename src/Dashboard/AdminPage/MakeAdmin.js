import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Component/Loading";
import MakeAdminTable from "./MakeAdminTable";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: user,
    refetch,
  } = useQuery("product", () =>
    fetch(`https://lit-thicket-98954.herokuapp.com/user`, {
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
    <div>
      <div className="container mx-auto px-4 md:px-20 py-12 h-screen overflow-y-scroll">
        <h1 className="text-2xl text-secondary font-bold text-center uppercase mb-5">
          Create Admin
        </h1>

        <div className="flex flex-col ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden ">
                <MakeAdminTable user={user} refetch={refetch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
