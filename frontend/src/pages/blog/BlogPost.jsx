import React from 'react'
import NavBar from '../../components/tools/NavBar';
import BlogPostComp from '../../components/blog/BlogPost';
import Comments from '../../components/blog/Comments';
import useGetBlog from '../../hooks/useGetBlog';
import { useAuthContext } from '../../context/AuthContext';

const BlogPost = () => {
  const {loading, blog} = useGetBlog()
  
  const someJ = {
    title: "15 Disadvantages Of Freedom And How You Can Workaround It.",
    author: "samurai2099",
    date: "27 may 2022",
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Luctus venenatis lectus magna fringilla urna. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Elit sed quam 
      adipiscing vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.
    `
}
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <NavBar/>

      <main className="bg-gray-50 max-w-3xl mx-auto p-4 rounded-md">
        <BlogPostComp blogData={blog}/>
        <Comments />
      </main>
    </div>
  );
}

export default BlogPost