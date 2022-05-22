import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageBanner from "../Component/PageBanner";
import auth from "../firebase.init";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PurchesPage = () => {
  const [currentUser] = useAuthState(auth);
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery("product", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const message = event.target.message.value;

    const purchesValue = {
      name: currentUser?.displayName,
      email: currentUser?.email,
      productName: product?.productName,
      price: product?.price,
      phone,
      address,
      message,
    };
  };

  return (
    <>
      <PageBanner page="Parches" />
      <div className="my-12">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div class="form-group mb-6">
              <input
                type="text"
                value={currentUser.displayName}
                disabled
                class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                id="exampleInput7"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                value={currentUser.email}
                disabled
                class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                    
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white  focus:outline-none"
                id="exampleInput8"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                disabled
                value={product?.productName}
                class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                id="exampleInput7"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                value={`$${product?.price}`}
                disabled
                class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                id="exampleInput7"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                name="address"
                class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        
                        border
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                id="exampleInput7"
                placeholder="Address"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                name="phone"
                class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        
                       border
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                id="exampleInput7"
                placeholder="Phone Number"
              />
            </div>

            <div class="form-group mb-6">
              <textarea
                name="message"
                class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                    
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white  focus:outline-none
                    "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="danger"
              className="
                          w-full
                          px-6
                          py-2.5
                          bg-primary
                          text-white
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                        
                          shadow-md
                          hover:bg-blue-700 hover:shadow-lg
                          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                          active:bg-blue-800 active:shadow-lg
                          transition
                          duration-150
                          ease-in-out"
            >
              Purches
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PurchesPage;
