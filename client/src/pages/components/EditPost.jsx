import { TextInput, Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

function EditPost(props) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(props.postContent);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {};

  const handleCancel = () => {};

  return (
    <>
      <Modal show={false} onClose={onClose}>
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
          <Button color="light" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
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

export default EditPost;
