import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-transparent hover:bg-gray-100  focus:ring-1 focus:outline-none font-medium text-lg text-center inline-flex items-center "
        type="button"
        onClick={handleClick}
      >
        ...
      </button>
      {open && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 ">
                Edit
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 ">
                Delete
              </button>
            </li>
            <li>
              <button
                // onClick={setOpen(!open)}
                className="block px-4 py-2 text-red-600 hover:bg-gray-100 "
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
