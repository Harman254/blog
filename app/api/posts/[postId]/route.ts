import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type ContextProps = {
  params: {
    postId: string;
  };
};

export async function DELETE(req: Request, context: ContextProps) {
  try {
    const { params } = context;

    await prisma.post.delete({
      where: {
        id: params.postId,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}
export async function PATCH(req: Request, context: ContextProps) {
  try {
    const { params } = context;
    const body = await req.json();

    await prisma.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    return NextResponse.json(
      { message: "post updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: ContextProps) {
  try {
    const { params } = context;
    const post = await prisma.post.findUnique({
      where: {
        id: params.postId,
      },
      include: {
        tag: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not fetch post" },
      { status: 500 }
    );
  }
}
