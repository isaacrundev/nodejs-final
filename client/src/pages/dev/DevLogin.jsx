import React, { useState } from "react";

const loginValues = { userName: "", passWord: "" };

export default function DevLogin() {
  const [inputValues, setInputValues] = useState(loginValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <form>
        <label>
          Username
          <input
            name="userName"
            type="text"
            value={inputValues.userName}
            onChange={changeHandler}
          />
        </label>
        <label>
          Password
          <input name="passWord" type="password" value={inputValues.passWord} />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}
