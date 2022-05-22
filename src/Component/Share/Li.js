/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Li = (props) => {
  return (
    <li>
      <a
        className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
        href="#"
      >
        {props.children}
      </a>
    </li>
  );
};

export default Li;
