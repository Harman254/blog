import Postcard from "./components/Postcard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async () => {
  const res = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
};

export default async function Home() {
  const posts = await getData();

  console.log(posts);

  return (
    <main className="grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {posts.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </main>
  );
}

// const sendPost = async (title: string, content: string) => {
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title: title,
//         content: content,
//         tag: {
//           create: {
//             name: "Javascript" || "C++" || "python",
//           },
//         },
//       },
//     });
//     console.log(`Post created with ID: ${post.id}`);
//   } catch (error) {
//     console.log("error sending data", error);
//   }
// };

// sendPost("the city of Nairobi", "This is content about Nairobi");
