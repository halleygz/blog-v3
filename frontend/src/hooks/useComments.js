import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const useComments = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const addComment = async (comment) => {
    const success = handleUserInput(comment);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/blog/create/${id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({comment})
      });
      if(!res) throw new Error('response not ok')
      const data = await res.json()
    if(data.error) {
        console.log('error', data.error)
        toast.error(data.error)
        return
    }
    console.log("comment success", data)
    toast.success("comment posted, refresh to see it")
    } catch (err) {
      toast.error("failed to comment");
      console.log("couldn't comment", err);
    }
  };
  return {loading, addComment};
};

function handleUserInput(comment) {
  if (!comment) {
    toast.error("Please write a comment");
    return false;
  }
  return true;
}

export default useComments;
