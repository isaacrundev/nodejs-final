import axios from "axios";
import { useEffect, useRef, useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function Dropdown(props) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const refForClosing = useRef();

  useEffect(() => {
    let outsideClickHandler = (e) => {
      !refForClosing.current.contains(e.target) && setDropdownIsOpen(false);
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [refForClosing]);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const editOnclick = () => {
    setDropdownIsOpen(false);
  };

  return (
    <div ref={refForClosing}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-transparent hover:bg-gray-100  focus:ring-1 focus:outline-none text-sm text-center items-center "
        type="button"
        onClick={handleDropdownClick}
      >
        ...
      </button>
      {dropdownIsOpen && (
        <div
          id="dropdown"
          className="bg-white divide-y divide-gray-100 rounded-lg shadow z-10 absolute"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <EditModal editOnclick={editOnclick} />
            <DeleteModal postId={props.postId} fetchAll={props.fetchAll} />
          </ul>
        </div>
      )}
    </div>
  );
}
