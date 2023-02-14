import { useState } from "react";
import Login from "./components/Login";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const signUpValues = {
  userName: "",
  email: "",
  passWord: "",
  confirmPassWord: "",
};

export default function LoginSignup() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
