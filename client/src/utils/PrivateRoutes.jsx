import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function PrivateRoutes() {
  const navigate = useNavigate();

  return localStorage.getItem("token") ? <Outlet /> : <Login />;
}
