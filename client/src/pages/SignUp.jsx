import { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

const schema = z
  .object({
    username: string().min(6),
    email: string().email(),
    password: string().min(6),
    confirmpassword: string().min(6),
  })
  .superRefine(({ password, confirmpassword }, ctx) => {
    if (password == !confirmpassword) {
      ctx.addIssue({
        code: "custom",
        message: `Passwords didn't match`,
      });
    }
  });

export default function SignUp() {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = async (values) => {
    const saveData = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
      values
    );
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSave)}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            {...register("username")}
            type="text"
            required={true}
          />
        </div>
        <div className=" text-red-600">{errors.username?.message}</div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email Address" />
          </div>
          <TextInput
            id="email"
            {...register("email")}
            type="email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            {...register("password")}
            type="password"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmpassword" value="Confirm Password" />
          </div>
          <TextInput
            id="password"
            {...register("confirmpassword")}
            type="password"
            required={true}
          />
        </div>
        <Button type="submit">Sign up</Button>
      </form>
    </>
  );
}
