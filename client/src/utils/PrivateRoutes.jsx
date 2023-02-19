import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login";

export default function PrivateRoutes() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
}
