import { TextInput, Button } from "flowbite-react";
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
    <div className="flex gap-2">
      <TextInput value={inputValue} onChange={handleInputChange}></TextInput>
      <Button onClick={handleSave}>Save</Button>
      <Button color="light" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
}

export default EditPost;
