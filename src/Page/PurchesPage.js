import React from "react";
import PageBanner from "../Component/PageBanner";

const PurchesPage = () => {
  return (
    <>
      <PageBanner page="Parches" />
      <div className="my-12">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
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
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
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
              <input
                type="email"
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
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
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
              class="
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
