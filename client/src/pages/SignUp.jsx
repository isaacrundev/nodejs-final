import { useState } from "react";
import { Label, TextInput, Button, ListGroup } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Navigate } from "react-router-dom";
import LoadingIcon from "../assets/LoadingIcon";

const schema = z
  .object({
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(
    (form) => {
      return form.password === form.confirmPassword;
    },
    {
      message: "Passwords must match.",
      path: ["confirmPassword"],
    }
  );

export default function SignUp() {
  const [usernameExist, setUsernameExist] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleSave = async (values) => {
    try {
      setLoading(true);
      const saveData = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        values
      );
      navigate("/");
    } catch (error) {
      if (error.response.data.error === "Username exists") {
        setUsernameExist(true);
      } else if (error.response.data.error === "Email exists") {
        setEmailExist(true);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          className="flex flex-col gap-4 text-black"
          onSubmit={handleSubmit(handleSave)}
        >
          <div>
            <div className="mb-2 block">
              <label htmlFor="username">Username</label>
            </div>
            <input
              className=" rounded-md "
              id="username"
              {...register("username")}
              type="text"
              required={true}
            />
          </div>
          {usernameExist ? (
            <div className=" text-red-600 text-sm">Username existed</div>
          ) : null}
          {errors.username?.message ? (
            <div className=" text-red-600 text-sm">
              {errors.username?.message}
            </div>
          ) : null}
          <div>
            <div className="mb-2 block">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              className=" rounded-md "
              id="email"
              {...register("email")}
              type="email"
              required={true}
            />
          </div>
          {emailExist ? (
            <div className=" text-red-600 text-sm">Email existed</div>
          ) : null}
          {errors.email?.message ? (
            <div className=" text-red-600 text-sm">{errors.email?.message}</div>
          ) : null}
          <div>
            <div className="mb-2 block">
              <label htmlFor="password">Password</label>
            </div>
            <input
              className=" rounded-md"
              id="password"
              {...register("password")}
              type="password"
              required={true}
            />
          </div>
          {errors.password?.message ? (
            <div className=" text-red-600 text-sm">
              {errors.password?.message}
            </div>
          ) : null}
          <div>
            <div className="mb-2 block">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              className=" rounded-md"
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              required={true}
            />
          </div>
          {errors.confirmPassword?.message ? (
            <div className=" text-red-600 text-sm">
              {errors.confirmPassword?.message}
            </div>
          ) : null}
          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={loading} className="block">
              {loading ? <LoadingIcon /> : "Sign up"}
            </Button>
            <Button href="/" type="button" color="gray">
              Back
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
