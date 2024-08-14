import React from "react";
import NavBar from "../../components/tools/NavBar";
import { TagBtns } from "../../components/tools/Buttons";
import Feed from "../../components/blog/Feed";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";

const BlogList = () => {
  const { loading, blogs, page, totalPages, nextPage, prevPage } = useGetAllBlogs();

  const structured = blogs.map((blog) => (
    <Feed
      content={blog.content.slice(0, 300)}
      title={blog.title}
      key={blog._id}
      id={blog._id}
      tags={blog.tags}
    />
  ));

  return (
    <div className="min-h-screen flex flex-col bg-whitesmoke p-6">
      <NavBar />

      <main className="max-w-[80%] flex-grow container mx-auto px-6">
        <h2 className="text-gray-500 text-xl font-medium mb-2">Trending</h2>
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          structured
        )}
      </main>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className={`px-4 py-2 bg-pink-400 text-white rounded ${page === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 bg-pink-400 text-white rounded ${page === totalPages && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
