import Link from "next/link";
const Postcard = () => {
  return (
    <div className="card w-full bg-white shadow-2xl border">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/blog/1" className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
