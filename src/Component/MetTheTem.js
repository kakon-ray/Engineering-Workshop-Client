/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MeetTheTemCard from "./MeetTheTemCard";

const MetTheTem = () => {
  return (
    <section className="mb-32 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Meet the <u className="text-blue-600">Team</u>
      </h2>

      <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
        <MeetTheTemCard />
        <MeetTheTemCard />
        <MeetTheTemCard />
      </div>
    </section>
  );
};

export default MetTheTem;
