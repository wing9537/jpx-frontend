import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/userSlice";

function AuthKit() {
  const token = useSelector(getToken);
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to home page
  return token ? <Outlet /> : <Navigate to="/home" />;
}
export default AuthKit;
