import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tags = await prisma.tag.findMany();

    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "could not fetch" }, { status: 500 });
  }
}
// const creatTag = async (tagName: string) => {
//   try {
//     const cTag = await prisma.tag.create({
//       data: {
//         name: tagName,
//       },
//     });

//     console.log(`tag was created with id ${cTag.id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// creatTag("Javascript");
// creatTag("Python");
// creatTag("C++");
