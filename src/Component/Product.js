import React from "react";

const Product = () => {
  return (
    <div className="w-100">
      <div class="flex justify-center">
        <div class="flex flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="mr-8 w-32">
            <img
              class="object-contain m-5"
              src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg"
              alt=""
            />
          </div>

          <div class=" flex flex-col justify-start p-5">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Headlights & Lighting
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Bumpers <br /> Car Covers <br /> Door Handles <br /> Fog Lights
            </p>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >
              Purches Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
