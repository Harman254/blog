import Link from "next/link";
import { PenSquare, Trash2 } from "lucide-react";

const ButtonAction = () => {
  return (
    <>
      <Link href="/edit/id" className="btn mr-2">
        <PenSquare /> Edit
      </Link>
      <button className="btn btn-error">
        <Trash2 />
        Delete
      </button>
    </>
  );
};

export default ButtonAction;
