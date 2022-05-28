import React from "react";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
  const { auth } = useAuth;
  console.log("Auth", auth);
  return <div>Profile</div>;
};

export default Profile;
