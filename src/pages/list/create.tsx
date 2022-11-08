import Link from "next/link";
import React from "react";

const PostCreatePage = () => {
  return (
    <div>
      create
      <Link href={"/list"} as={"/list"}>
        list
      </Link>
    </div>
  );
};

export default PostCreatePage;
