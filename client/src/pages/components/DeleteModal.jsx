import axios from "axios";

import { Button, Modal } from "flowbite-react";
function DeleteModal({ closeModal, fetchAll, postId }) {
  const handleClose = () => {
    closeModal();
  };
  const deleteOnclick = async () => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/post/${postId}/delete`
      );
      closeModal();
      if (result.status === 200) {
        fetchAll();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className=" z-20 w-full h-full fixed top-0 left-0 bg-black opacity-80">
        <div
          className=" mx-auto my-0"
          //   onClick={(e) => {
          //     e.stopPropagation(e);
          //   }}
        >
          <Modal show={true} onClose={handleClose}>
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
