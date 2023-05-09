import React from "react";
import { useNavigate } from "react-router-dom";
import Fox from "../../assets/Fox";

export default function MainMenu() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <Fox />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-2">
              FoxBook
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleLogoutClick}
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
