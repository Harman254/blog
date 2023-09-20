"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { type FormInputPost } from "@/types";
import { FC } from "react";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center  gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title"
        className="input input-bordered w-full max-w-lg bg-white"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg bg-white"
        placeholder="Post content"
      ></textarea>
      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg bg-white"
        defaultValue=""
      >
        <option disabled value="">
          Select tags
        </option>
        <option>Javascript</option>
        <option>Python</option>
        <option>C++</option>
        <option>Golang</option>
        <option>C#</option>
        <option>Java</option>
      </select>

      <button className="btn btn-primary w-full max-w-lg" type="submit">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
