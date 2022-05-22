/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 h-screen">
        <div className="lg:col-span-1 col-span-4">
          <Profile />
        </div>
        <div className="lg:col-span-3 col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
