import { TextInput, Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

function EditModal(props) {
  const [inputValue, setInputValue] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setInputValue(props.postContent);
  }, []);

  const openModalClick = () => {
    () => {
      props.setDropdownIsOpen(false);
      setModalIsOpen(true);
    };
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {};

  const handleClose = () => {};

  return (
    <>
      <li className="w-full">
        <button
          className="block w-full hover:bg-gray-100 text-left p-2"
          type="button"
          onClick={openModalClick}
        >
          Edit
        </button>
      </li>
      <div className=" z-20 absolute bg-gray-400 opacity-50">
        <div className=" mx-auto my-0">
          <Modal onClose={handleClose}>
            <Modal.Header>Edit Post</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <TextInput
                  value={inputValue}
                  onChange={handleInputChange}
                ></TextInput>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSave}>Save</Button>
              <Button color="light" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
    // <div className="flex flex-col gap-2">
    //   <div className=" w-1/3">
    //     <TextInput value={inputValue} onChange={handleInputChange}></TextInput>
    //   </div>
    //   <div className="flex gap-2">
    //     <Button onClick={handleSave}>Save</Button>
    //     <Button color="light" onClick={handleCancel}>
    //       Cancel
    //     </Button>
    //   </div>
    // </div>
  );
}

export default EditModal;
