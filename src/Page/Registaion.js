import React from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../Component/PageBanner";

const Registation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <PageBanner page="Registaion"></PageBanner>
      <div className="max-w-lg mx-auto py-24 ">
        <div className="shadow-lg p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label class="label">
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
        my-2
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
            />

            <label class="label">
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
              class="form-control block
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
              class="form-control block
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

            <input
              type="submit"
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
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registation;
