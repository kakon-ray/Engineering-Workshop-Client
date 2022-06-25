import React, { useState } from "react";
import { useForm } from "react-hook-form";

import StarRatingComponent from "react-star-rating-component";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Swal from "sweetalert2";

const AddReview = () => {
  const [rating, setRating] = useState(5);
  const [currentUser] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userProfessional = data.profession;
    const description = data.description;
    const name = currentUser.displayName;
    const photoURL = currentUser.photoURL;

    fetch(`https://lit-thicket-98954.herokuapp.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userProfessional,
        description,
        name,
        photoURL,
        rating,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thanks for you Review",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
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

        <p className="text-lg text-center text-secondary">
          If you are happy for our services please good Review our services
        </p>
        <div className="mx-auto text-center my-4">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            className="text-3xl"
            onStarClick={onStarClick}
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
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
