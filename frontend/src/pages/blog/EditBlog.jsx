import React, { useEffect, useMemo, useState } from "react";
import useGetBlog from "../../hooks/useGetBlog";
import InputFields from "../../components/tools/InputFields";
import ReactQuill from "react-quill";
import useUpdateBlog from "../../hooks/useUpdateBlog";

const EditBlog = () => {
  const { loading, blog } = useGetBlog();
  const { updateloading, editBlog, deleteBlog } = useUpdateBlog()
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  useEffect(() => {
    if (blog) {
      setContent(blog.content || "");
      setTitle(blog.title || "");
      setTags(blog.tags?.join(", ") || "");
      setTagsArray(blog.tags || []);
    }
  }, [blog]);

  const atag = tagsArray.map((btag) => (
    <code
      key={btag}
      className="bg-slate-300 m-1 pl-1 pr-1 align-center rounded-[8px]"
    >
      #{btag}
    </code>
  ));
  const onTagsChange = useMemo(
    () => (event) => {
      const value = event.target.value;
      setTags(value);
      const resultArray = value.replace(/\s+/g, "").split(",");
      setTagsArray(resultArray);
    },
    []
  );

  const handleContentChange = (value) => {
    setContent(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editBlog({title, content, tags})
  };
  const handleClick = async (e) => {
    e.preventDefault()
    await deleteBlog()
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        What's in your mind today?
      </h1>

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:border-gray-400"
            placeholder="Enter the title"
          />
          <InputFields
            className="mt-2"
            content={"Tags"}
            type={"text"}
            id={"tags"}
            name={"tags"}
            value={tags}
            onChange={onTagsChange}
            placeholder="Enter the Title"
          />
          <div className="inline">{atag}</div>

          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="h-60 mb-6"
            placeholder="Type something"
          />
          <button className="bg-pink-300 text-white px-6 py-2  hover:bg-pink-400 mt-6">
            Update Post
          </button>
        </form>
      <div onClick={handleClick} className="bg-red-400 text-white px-6 py-2  hover:bg-red-500 mt-6 items-center text-center">
        <button>
        Delete Post
        </button>
      </div>
      </div>
    </div>
  );
};

export default EditBlog;
