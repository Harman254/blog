"use client";
import Link from "next/link";
import { PenSquare, Trash2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";

type ButtonActionProps = {
  id: string;
};

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();
  console.log(id);
  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return await axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => console.error(error),
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleDelete = () => deletePost();
  return (
    <>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <PenSquare /> Edit
      </Link>
      <button className="btn btn-error" onClick={handleDelete}>
        {isLoading && <span className="loading loading-spinner"></span>}
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <Trash2 />
            Delete
          </>
        )}
      </button>
    </>
  );
};

export default ButtonAction;
