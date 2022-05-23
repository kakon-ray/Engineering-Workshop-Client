import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Profile = () => {
  const [currentUser] = useAuthState(auth);
  const [userInfor, setUserInf] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user/${currentUser.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInf(data));
  }, []);

  return (
    <div>
      <div class="p-6 bg-accent text-white h-72 lg:h-screen flex flex-col">
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
        <span className="border my-6">
          <h1 className="text-2xl font-bold text-center">
            {currentUser.displayName}
          </h1>
          <hr className="my-2" />
          <h1 className="text-lg font-bold text-center">{userInfor.phone}</h1>
          <hr className="my-2" />
          <h1 className="text-lg font-bold text-center">{currentUser.email}</h1>
          <hr className="my-2" />
          <h1 className="text-lg font-bold text-center">{userInfor.address}</h1>
        </span>
      </div>
    </div>
  );
};

export default Profile;
