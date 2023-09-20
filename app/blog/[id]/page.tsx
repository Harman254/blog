import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import React from "react";

const BlogDetailspage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">Post One</h1>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  );
};

export default BlogDetailspage;
