import React from "react";

import img from "../../src/images/error.png";
const Error = () => {
  return (
    <div>
      <img src={img} alt="Error 404" className="object-contain" />
    </div>
  );
};

export default Error;
