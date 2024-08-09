import React from "react";
import { TagBtns } from "../tools/Buttons";

const Feed = ({title, content}) => {
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold text-orange-500 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        {content}
        <a href="#" className="text-orange-500 hover:underline">
          read more
        </a>
      </p>
      <div className="space-x-4">
        <TagBtns content={"#Post details"} />
        <TagBtns content={"#Freedom"} />
        <TagBtns content={"#Peace"} />
      </div>
    </div>
  );
};

export default Feed;
