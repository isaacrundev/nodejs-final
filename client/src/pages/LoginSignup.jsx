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

  const handleChange = (e) => {
    setValue(newValue);
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
            type="email"
            placeholder="name@emailaddress.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" required={true} />
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
