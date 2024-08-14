import React, { useState } from 'react'
import useGetAllSearch from '../../hooks/useGetAllSearch';
import NavBar from '../../components/tools/NavBar';
import Feed from '../../components/blog/Feed';
import InputFields from '../../components/tools/InputFields';

const Search = () => {
  const { loading, blogs } = useGetAllSearch();
  const [inputs, setInputs] = useState("")
  const filteredBlog = blogs.filter((blog)=>blog.searchable.includes(inputs))

  const structured = filteredBlog.map((blog) => (
    <Feed
      content={blog.content.slice(0, 300)}
      title={blog.title}
      key={blog._id}
      id={blog._id}
      tags={blog.tags}
    />
  ));

  return (
    <div className="min-h-screen flex flex-col bg-white p-6">
      <NavBar />

      <main className="flex-grow container mx-auto px-6">
        <h2 className="text-gray-500 text-xl font-medium mb-2">search</h2>
        <InputFields placeholder='search here' value={inputs} onChange={(e)=>setInputs(e.target.value)}/>
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          structured
        )}
      </main>

    </div>
  );
}

export default Search