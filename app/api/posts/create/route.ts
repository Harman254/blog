import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not create post" },
      { status: 500 }
    );
  }
}
