import { useState } from "react";
import { Label, TextInput, Button, ListGroup } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Navigate } from "react-router-dom";

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
      console.log(errors);
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
      <form
        className="flex flex-col gap-4 text-black"
        onSubmit={handleSubmit(handleSave)}
      >
        <div>
          <div className="mb-2 block">
            <label htmlFor="username">Username</label>
          </div>
          <input
            className=" rounded-md border-none"
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
            className=" rounded-md border-none"
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
            className=" rounded-md border-none"
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
            className=" rounded-md border-none"
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
        <Button type="submit">Sign up</Button>
      </form>
    </>
  );
}
