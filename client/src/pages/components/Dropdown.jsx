import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const refForClosing = useRef();

  useEffect(() => {
    let outsideClickHandler = (e) => {
      !refForClosing.current.contains(e.target) && setOpen(false);
      console.log(refForClosing.current);
    };
  });

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
          className="bg-white divide-y divide-gray-100 rounded-lg shadow"
          ref={refForClosing}
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
          </ul>
        </div>
      )}
    </>
  );
}
