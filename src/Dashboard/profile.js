import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Profile = ({ refetch, userInfor }) => {
  const [currentUser] = useAuthState(auth);

  return (
    <div>
      <div class="p-6 bg-accent text-white h-full lg:h-screen flex flex-col">
        <div className="mx-auto">
          {currentUser.photoURL ? (
            <img
              src={currentUser?.photoURL}
              alt=""
              className="rounded w-52 h-52"
            />
          ) : (
            <ion-icon
              name="person-circle-outline"
              style={{ fontSize: "70px" }}
            ></ion-icon>
          )}
        </div>
        <span className=" my-6">
          <h1 className="text-2xl font-bold text-center py-1">
            {currentUser.displayName}
          </h1>
          <h1 className="text-lg font-bold text-center py-1">
            {userInfor.phone}
          </h1>
          <h1 className="text-lg font-bold text-center py-1">
            {currentUser.email}
          </h1>
          <h1 className="text-lg font-bold text-center mb-2 py-1">
            {userInfor.address}
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Profile;
