import React, { useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function Index() {
  useEffect(() => {
    localStorage.getItem("token") ? <Dashboard /> : <Login />;
  }, []);
  return <></>;
}
