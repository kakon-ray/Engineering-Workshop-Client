import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../Component/PageBanner";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";

import auth from "../firebase.init";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hook/useToken";
import SocialLogin from "../Dashboard/Share/SocialLogin";

const Registation = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, emailVaryerror] =
    useSendEmailVerification(auth);

  let navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(user);
  const emailRef = useRef("");
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
  };

  if (token) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Success",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

  return (
    <>
      <PageBanner page="Registaion"></PageBanner>
      <div className="max-w-lg mx-auto py-24 ">
        <div className="shadow-lg p-10">
          {error && (
            <p className="pb-8 text-primary text-center">{`Registation faild ${error.message}`}</p>
          )}
          <SocialLogin />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              {!errors.name && (
                <span className="label-text-alt">Enter Your Name</span>
              )}

              {errors.name?.type === "required" && (
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="label-text-alt primary">
                  {errors.name.message}
                </span>
              )}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
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
        my-2
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
            />

            <label className="label">
              {!errors.email && (
                <span className="label-text-alt">Enter Your Email</span>
              )}
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-primary">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-primary">
                  {errors.email.message}
                </span>
              )}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
              className="form-control block
        w-full
        px-3
        py-1.5
        my-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        
       border
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
            />
            <label>
              {!errors.password && (
                <span className="label-text-alt">Enter Password</span>
              )}
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-primary">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-primary">
                  {errors.password.message}
                </span>
              )}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
              className="form-control block
        w-full
        px-3
        py-1.5
        my-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        
       border
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="danger"
              className="
      w-full
      px-6
      mt-2
      py-2.5
      bg-primary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
     cursor-pointer
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Submit
            </button>
          </form>
          <Link to="/login">
            <p className=" text-center pt-4 cursor-pointer">
              Already have a account!{" "}
              <span className="text-purpleColor font-bold"> Please Login</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registation;
