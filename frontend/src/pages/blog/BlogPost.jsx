import React from 'react'
import NavBar from '../../components/tools/NavBar';
import BlogPostComp from '../../components/blog/BlogPost';
import Comments from '../../components/blog/Comments';
import useGetBlog from '../../hooks/useGetBlog';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { LikeDislike } from '../../components/tools/Buttons';

const BlogPost = () => {
  const {loading, blog} = useGetBlog()
  const {authUser} = useAuthContext()
  const placeHolderLink = !loading && blog.author && authUser.userName === blog.author ? (
    <Link to={`/edit/${blog._id}`}>
      <LikeDislike content={"Edit Blog"} />
    </Link>
  ) : (
    <></>
  );
  console.log(blog.author)
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <NavBar/>

      <main className="bg-gray-50 max-w-3xl mx-auto p-4 rounded-md">
        <BlogPostComp blogData={blog} placeHolder={placeHolderLink}/>
        <Comments />
      </main>
    </div>
  );
}

export default BlogPost