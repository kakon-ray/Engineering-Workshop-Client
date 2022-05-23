import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const imageStoregeKey = "e944521e2747c552bc19a4c67af741d6";

const MyProfiles = () => {
  const [currentUser] = useAuthState(auth);
  const [userInfor, setUserInf] = useState({});
  const [updateProfile, updating, authError] = useUpdateProfile(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${currentUser.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInf(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = currentUser.email;
    const image = data.image[0];
    const phone = data.phone;
    const address = data.address;

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

          const user = {
            name,
            email,
            image: img,
            phone,
            address,
          };

          fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((userInformation) => {
              if (userInformation.result.acknowledged) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User Information Update Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              } else {
                Swal.fire({
                  position: "top-center",
                  icon: "error",
                  title: "Faild to Update User Information",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          updateProfile({ displayName: data.name, photoURL: img });
        }
      });
  };

  return (
    <div className="w-100 mx-32 mt-8 mx-auto p-10 shadow-md border">
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
            placeholder={`${
              !currentUser?.displayName ? "User Name" : currentUser?.displayName
            } `}
            {...register("name")}
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
            placeholder={`${
              !userInfor?.address ? "Address" : userInfor?.address
            } `}
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
            placeholder={`${
              !userInfor?.phone ? "Phone Number" : userInfor?.phone
            } `}
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
