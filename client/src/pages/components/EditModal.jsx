import axios from "axios";

import { TextInput, Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

function EditModal({ closeModal, postContent, postId, fetchAll }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(postContent);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = async () => {
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/api/post/${postId}/update`,
        { data: { content: inputValue } }
      );
      closeModal();
      if (result.status === 200) {
        fetchAll();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <div className=" z-20 w-full h-full fixed top-0 left-0 bg-black opacity-80">
        <div className=" mx-auto my-0">
          <Modal show={true} onClose={handleClose}>
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
