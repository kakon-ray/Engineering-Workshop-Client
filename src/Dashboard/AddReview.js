import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-40 mt-12 p-8 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <input
            type="text"
            name="name"
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
            placeholder="Profession"
            {...register("profession")}
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            type="text"
            cols="1"
            rows="5"
            name="description"
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
            placeholder="Desription"
            {...register("description")}
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
          Purches
        </button>
      </form>
    </div>
  );
};

export default AddReview;
