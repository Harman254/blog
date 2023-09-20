"use client";
import FormPost from "@/app/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const EditPostpage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl my-4 text-center">Edit post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
};

export default EditPostpage;
