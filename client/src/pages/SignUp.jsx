import { useState } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const signUpValues = {
  username: "",
  email: "",
  password: "",
  confirmpassWord: "",
};

export default function SignUp() {
  const [value, setValue] = useState(signUpValues);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            name="username"
            type="email"
            placeholder="name@emailaddress.com"
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
            name="username"
            type="password"
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
        <Button type="submit" onSubmit={handleSubmit}>
          Login
        </Button>
      </form>
    </>
  );
}
