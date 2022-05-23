import React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./Share/SidebarLink";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

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
            <Link to="/dashboard/myorder">
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

            <li
              class="relative"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("accessToken");
              }}
            >
              <a
                class="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <ion-icon name="log-out-outline"></ion-icon>
                <span className="ml-1">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
