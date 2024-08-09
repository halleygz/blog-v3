import React from "react";

const ChatBox = () => {
  return (
    <div>
      <textarea
        className="w-full border border-gray-300 rounded-md p-4 mb-4"
        rows="4"
        placeholder="Comment"
      ></textarea>
      <button className="bg-gray-600 text-white px-6 py-2 rounded">
        Comment
      </button>
    </div>
  );
};

export default ChatBox;
