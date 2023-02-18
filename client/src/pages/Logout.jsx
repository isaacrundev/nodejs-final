import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const countDown = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>You've Logged out!!</p>
      {navigate("/login")}
    </>
  );
}
