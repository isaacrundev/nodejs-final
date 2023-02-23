import React, { useState } from "react";

export default function Dropdown() {
  //   const [dropdown, setDropdown] = useState(false);

  //   const clickhandler = () => {
  //     setDropdown();
  //   };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-transparent hover:bg-gray-100  focus:ring-1 focus:outline-none font-medium text-lg text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        // onClick={clickhandler}
      >
        ...
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
