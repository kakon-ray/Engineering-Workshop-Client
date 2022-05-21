import React from "react";

const Product = () => {
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border">
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
            <p class="text-primary font-bold cursor-pointer">Show All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
