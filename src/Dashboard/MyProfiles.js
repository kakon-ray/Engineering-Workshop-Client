import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const MyProfiles = () => {
  const [currentUser] = useAuthState(auth);

  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = currentUser.displayName;
    const email = currentUser.email;
    const photoURL = data.image[0];
    const phone = data.phone;
    const address = data.address;

    console.log({ name, email, photoURL, phone, address });
  };

  return (
    <div className="w-100 mx-32 mt-8 mx-auto p-10 shadow-md border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <input
            type="text"
            value={currentUser.displayName}
            disabled
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
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            value={currentUser.email}
            disabled
            className="form-control block
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
        <div className="form-group mb-6">
          <input
            type="text"
            {...register("address")}
            name="address"
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
            placeholder="Address"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            {...register("phone")}
            name="phone"
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
          Purches
        </button>
      </form>
    </div>
  );
};

export default MyProfiles;
