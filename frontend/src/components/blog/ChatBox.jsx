import React, { useState } from "react";
import useComments from "../../hooks/useComments";

const ChatBox = () => {
  const [comment, setComment] = useState("")
  const {loading, addComment} = useComments()


  const handleSubmit = async(e) =>{
    e.preventDefault()
    setComment("")
     await addComment(comment)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <textarea
        className="w-full border border-gray-300 rounded-md p-4 mb-4"
        rows="4"
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        placeholder="Comment"
      ></textarea>
      <button className="bg-gray-600 text-white px-6 py-2 rounded">
        Comment
      </button>
      </form>
    </div>
  );
};

export default ChatBox;
