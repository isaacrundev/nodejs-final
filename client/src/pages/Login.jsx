import { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";
import { redirect } from "react-router-dom";

const loginValues = {
  username: "",
  password: "",
};

export default function Login() {
  const [value, setValue] = useState(loginValues);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
      value
    );
    if (result.status === 200) {
      redirect("/Dashboard");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            name="username"
            type="text"
            placeholder="ex: isaac"
            required={true}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="ex: abc123"
            required={true}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <p className=" text-black">Not a member?</p>
          <a href="" className="text-red-600 underline">
            Sign up
          </a>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
