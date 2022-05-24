import React from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imageStoregeKey = "e944521e2747c552bc19a4c67af741d6";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const productName = data.productName;
    const image = data.image[0];
    const quantity = data.quantity;
    const price = data.price;
    const desc = data.desc;

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoregeKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          fetch(`https://lit-thicket-98954.herokuapp.com/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ productName, quantity, price, desc, img }),
          })
            .then((res) => res.json())
            .then((productInformation) => {
              if (productInformation.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Successfully add product",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });

    // reset();
  };

  return (
    <div className="w-100 mx-32 mt-8 mx-auto p-10 shadow-md shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="form-control block
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
            {...register("productName")}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            className="form-control block
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
            {...register("quantity")}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="form-control block
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
            {...register("price")}
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            row="5"
            type="text"
            placeholder="Description"
            name="desc"
            className="form-control block
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
            {...register("desc")}
          />
        </div>

        <div className="form-group mb-6">
          <input
            type="file"
            name="file"
            className="form-control block
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
            {...register("image")}
          />
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
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
