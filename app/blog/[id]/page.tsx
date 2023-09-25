import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

type BlogDetailspageProps = {
  params: {
    id: string;
  };
};

const getPost = async (id: string) => {
  const res = await prisma.post.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return res;
};

const BlogDetailspage = async ({ params }: BlogDetailspageProps) => {
  console.log(params.id);

  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">{post?.title}</h1>

        <ButtonAction id={params.id} />
      </div>
      <div className="badge badge-accent">{post?.tag.name}</div>
      <p className="text-slate-700">{post?.content}</p>
    </div>
  );
};

export default BlogDetailspage;
