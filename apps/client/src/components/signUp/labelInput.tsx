import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ISignUpForm } from ".";

interface ILabelInputProps {
  register: UseFormRegister<ISignUpForm>;
  title: string;
  type?: "text" | "password" | "email";
  name: keyof ISignUpForm;
}

const LabelInput = ({ register, title, type = "text", name }: ILabelInputProps) => {
  return (
    <label>
      <p>{title}</p>
      <input type={type} className="w-full rounded-md border px-2 py-2" {...register(name, { required: true })} />
    </label>
  );
};

export default LabelInput;
