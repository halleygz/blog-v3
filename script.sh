#!/bin/bash

# Create backend directories
mkdir -p backend/controllers/auth
mkdir -p backend/controllers/postBlog
mkdir -p backend/controllers/seeBlog
mkdir -p backend/db
mkdir -p backend/middleware
mkdir -p backend/models
mkdir -p backend/routes
mkdir -p backend/utils

# Create files
touch backend/controllers/auth/signup.js
touch backend/controllers/auth/login.js
touch backend/controllers/auth/logout.js
touch backend/controllers/postBlog/addBlogPost.js
touch backend/controllers/seeBlog/getBlog.js
touch backend/controllers/seeBlog/getComments.js
touch backend/db/connectMongo.js
touch backend/middleware/protector.js
touch backend/models/comments.js
touch backend/models/blogs.js
touch backend/models/users.js
touch backend/routes/authRoutes.js
touch backend/routes/seeBlogs.js
touch backend/routes/postBlogs.js
touch backend/utils/genToken.js

echo "Directory and file structure created successfully."
