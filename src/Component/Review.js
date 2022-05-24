/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import ReviewItem from "./Share/ReviewItem";

const Review = () => {
  const [review, setReview] = useState([]);

  const url = `http://localhost:5000/review`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const updateReview = review.slice(-6).reverse();
  return (
    <div>
      <section class="mb-32 text-gray-800 text-center">
        <h2 class="text-3xl font-bold mb-12">Our Client Review</h2>

        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {updateReview?.map((reviewItem) => {
            return <ReviewItem reviewItem={reviewItem} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Review;
