import React from "react";
import { TagBtns } from "../tools/Buttons";
import { Link } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

const Feed = ({ title, content, id, tags }) => {
  return (
    <div className="mt-10">
      <Link to={`/read/${id}`}>
        <h3 className="text-3xl font-bold text-orange-500 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
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
          <Link to={`/read/${id}`} className="text-orange-500 hover:underline">
             . ...read more
          </Link>
        </p>
        <div className="space-x-4">
          {tags.length === 0 ? (
            <TagBtns content={"#Post details"} />
          ) : (
            tags.map((tag) => <TagBtns key={tag} content={tag} />)
          )}
        </div>
      </Link>
    </div>
  );
};

export default Feed;
