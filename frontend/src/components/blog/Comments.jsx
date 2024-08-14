import React from "react";
import ChatBox from "./ChatBox";
import useGetBlog from "../../hooks/useGetBlog";

const Comments = () => {
  const { loading, blog } = useGetBlog();
  if (loading) return <p>loading</p>;
  if (!blog?.comments || blog.comments.length === 0)
    return (
  <>
    <ChatBox />
    <p>No comments available</p>
  </>
    );
  let commentData = blog.comments;
  let commentList = commentData.map((singleComment) => (
    <div className="flex space-x-4 items-center">
      <div className="bg-orange-200 text-orange-600 font-bold p-4 rounded-full h-10 w-10 flex items-center justify-center text-lg">
        {singleComment.commenter[0]}
      </div>
      <p className="text-sm text-gray-700">{singleComment.content}</p>
    </div>
  ));
  return (
    <>
      <ChatBox />

      <section className="mt-8 space-y-4">{commentList}</section>
    </>
  );
};

export default Comments;
