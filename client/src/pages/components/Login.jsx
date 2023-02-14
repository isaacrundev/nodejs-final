import { useState } from "react";

const loginValues = { userName: "", passWord: "" };

export default function Login() {
  const [inputValues, setInputValues] = useState(loginValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <form></form>
    </>
  );
}
