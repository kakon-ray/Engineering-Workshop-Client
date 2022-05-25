/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StarRatingComponent from "react-star-rating-component";

const ReviewItem = ({ reviewItem }) => {
  return (
    <div>
      <div class="mb-12 md:mb-0">
        <div class="flex justify-center mb-6">
          <img
            src={reviewItem.photoURL}
            class="rounded-full shadow-lg"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <h5 class="text-lg font-bold mb-4">{reviewItem.name}</h5>
        <h6 class="font-medium text-blue-600 mb-4">
          {reviewItem.userProfessional}
        </h6>
        <p class="mb-4">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="quote-left"
            class="w-6 pr-2 inline-block"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
          {reviewItem.description}
        </p>
        <div className="mx-auto text-center my-4">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={reviewItem.rating}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
