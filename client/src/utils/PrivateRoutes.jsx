import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   !localStorage.getItem("token") ? navigate("/") : null;
  // }, []);

  return localStorage.getItem("token") ? <Outlet /> : navigate("/");
}
