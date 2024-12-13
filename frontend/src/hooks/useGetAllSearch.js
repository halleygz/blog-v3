import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetAllSearch = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blog/read`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setBlogs(data.blogs);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { loading, blogs };
};

export default useGetAllSearch;
