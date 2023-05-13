import { Button, Modal } from "flowbite-react";
import { useState } from "react";
function DeleteModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      <li className="w-full">
        <button
          className="block w-full hover:bg-gray-100 text-red-600 font-bold text-left p-2"
          type="button"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Delete
        </button>
      </li>
      {modalIsOpen && (
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
                <Button onClick={handleSave} color="failure">
                  Delete
                </Button>
                <Button color="light" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteModal;
