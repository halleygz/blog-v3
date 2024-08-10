import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const useGetAllBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blog/read?page=${page}&limit=5`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return { loading, blogs, page, totalPages, nextPage, prevPage };
};

export default useGetAllBlogs;
