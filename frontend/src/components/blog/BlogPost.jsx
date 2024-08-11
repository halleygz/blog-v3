import React from "react";
import { LikeDislike } from "../tools/Buttons";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const BlogPostComp = ({ blogData = {} }) => {
  const { title, author, createdAt, content, _id } = blogData;
  const {authUser} = useAuthContext()
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
        {title}
      </h1>
      <div className="text-sm text-gray-500 mb-6">
        <p>written by @{author}</p>
        <p>on {createdAt}</p>
      </div>
      <article className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
        <MarkdownPreview
          source={content}
          style={{
            background: "transparent",
            color: "#1c1b1f",
            fontSize: "20px",
            fontFamily: "Lexend Deca",
            margin: "0",
          }}
        />
        {/* Continue with more Lorem Ipsum to mimic the content length */}
      </article>

      <div className="flex space-x-3 mb-8 max-w-60">
        <LikeDislike content={"Like"} />
        <LikeDislike content={"Dislike"} />
        {authUser.userName === author?<Link to={`/edit/${_id}`}><LikeDislike content={"Edit Blog"}/></Link>:<></>}
      </div>
    </>
  );
};

export default BlogPostComp;
