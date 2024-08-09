import React from "react";
import NavBar from "../../components/tools/NavBar";
import { TagBtns } from "../../components/tools/Buttons";
import Feed from "../../components/blog/Feed";

const BlogList = () => {
  const title = "15 Disadvantages Of Freedom And How You Can Workaround It."
  const content = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Exceptur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum ...
  `
  return (
    <div className="min-h-screen flex flex-col bg-white p-6">
      <NavBar />

      <main className="flex-grow container mx-auto px-6">
        <h2 className="text-gray-500 text-xl font-medium mb-2">Trending</h2>
        <Feed content={content} title={title}/>
        <Feed content={content} title={title}/>
        <Feed content={content} title={title}/>
        <Feed content={content} title={title}/>
      </main>
    </div>
  );
};

export default BlogList;
