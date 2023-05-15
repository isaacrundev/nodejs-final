import { Button, Modal } from "flowbite-react";
import { useState } from "react";
function DeleteModal({ closeDropdown }) {
  const handleClose = () => {
    setModalIsOpen(false);
  };
  const deleteOnclick = async () => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/post/${props.postId}/delete`
      );
      setOpen(false);
      if (result.status === 200) {
        props.fetchAll();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className=" z-20 w-full h-full fixed translate-x-[-50%] translate-y-[-50%] bg-gray-400 opacity-50">
        <div className=" mx-auto my-0">
          <Modal onClose={handleClose}>
            <Modal.Header>Delete</Modal.Header>
            <Modal.Body>
              <div>
                <p>Are you sure you want to delete this post?</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={deleteOnclick} color="failure">
                Delete
              </Button>
              <Button color="light" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
