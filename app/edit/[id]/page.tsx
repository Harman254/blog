"use client";
import BackButton from "@/app/components/BackButton";
import FormPost from "@/app/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { FC } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type EditPostpageProps = {
  params: {
    id: string;
  };
};

const EditPostpage: FC<EditPostpageProps> = ({ params }) => {
  const router = useRouter();
  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: [`posts ${params.id}`],
    queryFn: async () => {
      const res = await axios.get(`/api/posts/${params.id}`);
      return res.data;
    },
  });

  console.log(dataPost);

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  };

  const { mutate: updatePost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${params.id}`, newPost);
    },
    onError: (error) => console.error(error),
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <h1 className="font-bold text-2xl my-4 text-center">Edit post</h1>
      <FormPost
        isLoadingSubmit={isLoadingSubmit}
        submit={handleEditPost}
        initialValue={dataPost}
        isEditing
      />
    </div>
  );
};

export default EditPostpage;
