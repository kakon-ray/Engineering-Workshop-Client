/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "./Sidebar";

const DashboardSidebar = () => {
  return (
    <div>
      <div
        class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardSidebar;
