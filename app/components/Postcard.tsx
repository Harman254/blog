import { Tag } from "@prisma/client";
import Link from "next/link";

type PostcardProps = {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
};

const Postcard = ({ post }: PostcardProps) => {
  const { id, title, content, tag } = post;
  return (
    <div className="card w-full bg-white shadow-2xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 40)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-accent">{tag.name}</div>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
