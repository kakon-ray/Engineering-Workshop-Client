/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../firebase.init";
import DashboardSidebar from "./DashboardSidebar";
import MainSidebar from "./MainSidebar";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [currentUser] = useAuthState(auth);
  return (
    <div>
      <div className="grid grid-cols-4 ">
        <div className="lg:col-span-1 col-span-4">
          <MainSidebar></MainSidebar>
        </div>
        <div className="lg:col-span-3 col-span-4">
          <Outlet />
        </div>
      </div>
       {currentUser && (
        <div className="sidebutton">
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="inline-block font-bold text-center mr-2 px-6 py-2 border border-gray-500 text-white font-medium text-xs leading-tight  bg-primary hover:bg-red-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            DASHBOARD
          </button>
        </div>
      )}

      <DashboardSidebar />
    </div>
  );
};

export default Dashboard;
