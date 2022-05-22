import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Profile = () => {
  const [currentUser] = useAuthState(auth);

  console.log(currentUser);
  return (
    <div>
      <div class="p-6 bg-accent text-white h-screen">
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
        <h1 className="text-2xl font-bold">{currentUser.displayName}</h1>
        <h1 className="text-lg font-bold">{currentUser.email}</h1>
      </div>
    </div>
  );
};

export default Profile;
