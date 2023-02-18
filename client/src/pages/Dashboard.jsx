import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <h1 className=" text-black">Dashboard</h1>
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
}
