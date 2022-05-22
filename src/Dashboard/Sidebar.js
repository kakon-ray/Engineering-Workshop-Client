import React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./Share/SidebarLink";

const Sidebar = () => {
  return (
    <div>
      <div className="lg:col-span-1 col-span-5">
        <div class="w-60 h-screen shadow-md bg-white px-1">
          <h1 className="text-3xl text-secondary p-6">Dashboard</h1>
          <ul class="relative">
            <Link to="/dashboard">
              <SidebarLink
                title="Profile"
                icon={<ion-icon name="person-circle-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard">
              <SidebarLink
                title="My Order"
                icon={<ion-icon name="infinite-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard/dashboardreview">
              <SidebarLink
                title="Add Review"
                icon={<ion-icon name="star-outline"></ion-icon>}
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
