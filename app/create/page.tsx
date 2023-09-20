"use client";
import FormPost from "../components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";
import BackButton from "../components/BackButton";

const Create = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="font-bold text-2xl my-4 text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default Create;
