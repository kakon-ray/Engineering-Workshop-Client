import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Component/Loading";

const Payment = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery("data", () =>
    fetch(`https://lit-thicket-98954.herokuapp.com/myorderDetails/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //   console.log(myorderProduct);
  if (isLoading) {
    return <Loading />;
  }

  const stripePromise = loadStripe(
    "pk_test_51L1Q4WAIzqv6QO7WbF65f9XiKcZCgtmjJKOV0xZ2FiSu9E0SUzSv4Oww4ypuScqtuG0xEw38Rm3izV86U3GzCpA700fOuyGypr"
  );

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
                {data?.name}
              </h5>

              <p class="text-gray-700 text-base">Price:{data?.price} $</p>
              <p class="text-gray-700 text-base">Phone:{data?.phone}</p>
              <p class="text-gray-700 text-base">Email: {data?.email}</p>
              <p class="text-gray-700 text-base">Address: {data?.address}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white w-80 text-center">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} refetch={refetch} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
