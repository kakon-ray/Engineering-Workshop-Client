/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import ReviewItem from "./Share/ReviewItem";

const Review = () => {
  const [review, setReview] = useState([]);

  const url = `https://lit-thicket-98954.herokuapp.com/review`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((review) => setReview(review));
  }, []);

  const updateReviewIitem = review.slice(-3).reverse();

  return (
    <div>
      <section className="mb-32 text-gray-800 text-center mx-4">
        <h2 className="text-3xl font-bold mb-12">Our Client Review</h2>

        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {updateReviewIitem?.map((reviewItem) => {
            return <ReviewItem reviewItem={reviewItem} key={reviewItem._id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Review;
