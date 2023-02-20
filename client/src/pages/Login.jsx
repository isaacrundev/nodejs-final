import { useState, createContext } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import LoadingIcon from "../assets/LoadingIcon";

const loginValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [value, setValue] = useState(loginValues);
  const [failMsg, setFailMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const UserContext = createContext();

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        value
      );
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("username", result.data.username);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response.data.error) {
        setFailMsg(true);
        setLoading(false);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email Address" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="ex: isaac@gmail.com"
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
          <a href="/signup" className="text-red-600 underline">
            Sign up
          </a>
        </div>
        <Button type="submit">
          {loading ? <LoadingIcon /> : null}
          Login
        </Button>
        {failMsg ? (
          <div className=" text-red-600 text-sm">
            Incorrect username/password
          </div>
        ) : null}
      </form>
    </>
  );
}
