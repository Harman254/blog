"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { type FormInputPost } from "@/types";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValue?: FormInputPost;
  isLoadingSubmit: boolean;
}

const FormPost: FC<FormPostProps> = ({
  submit,
  isEditing,
  initialValue,
  isLoadingSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  const { data: dataTags, isLoading: isLoadingDataTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axios.get("/api/tags");
      console.log(res.data);
      return res.data;
    },
  });

  console.log(dataTags);
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
      {isLoadingDataTags ? (
        <span className="loading loading-bars loading-md"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg bg-white"
          defaultValue=""
        >
          <option disabled value="">
            Select tags
          </option>
          {dataTags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      )}

      <button className="btn btn-primary w-full max-w-lg" type="submit">
        {isLoadingSubmit && <span className="loading loading-spinner"></span>}
        {isEditing
          ? isLoadingSubmit
            ? "Updating..."
            : "Update"
          : isLoadingSubmit
          ? "Creating..."
          : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
