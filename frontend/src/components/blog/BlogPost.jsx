import React from 'react'
import { LikeDislike } from '../tools/Buttons'

const BlogPostComp = ({ blogData={} }) => {
    const {title, author, date, content} = blogData
    
  return (
    <>
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
          {title}
        </h1>
        <div className="text-sm text-gray-500 mb-6">
          <p>written by @{author}</p>
          <p>on {date}</p>
        </div>
        <article className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          {content}
          {/* Continue with more Lorem Ipsum to mimic the content length */}
        </article>

        <div className="flex space-x-4 mb-8 max-w-60">
            <LikeDislike content={"Like"} />
            <LikeDislike content={"Dislike"} />
        </div>

        
    </>
  )
}

export default BlogPostComp