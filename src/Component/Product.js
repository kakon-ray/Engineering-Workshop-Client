import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

const Product = ({ item }) => {
  return (
    <Slide bottom>
      <div className="w-100 ">
        <div className="flex justify-center">
          <div className="flex flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div className="mr-8 w-40">
              <img className="object-contain m-5" src={item.img} alt="" />
            </div>

            <div className=" flex flex-col justify-start p-5">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.productName?.split("").slice(0, 20)}
              </h5>
              <div className="text-gray-700 text-base mb-4">
                <p>{item.desc?.split("").slice(0, 50)}...</p>
              </div>
              <p>Total Item: {item.quantity}</p>
              <p className="mb-2">Price: ${item.price}</p>

              <Link to={`purshes/${item._id}`}>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Purches Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Product;
