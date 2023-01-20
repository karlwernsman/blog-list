import './Main.css';

import React from 'react';
import BlogCard from '../BlogCard/BlogCard.js';
import { useBlogs } from '../../hooks/blog.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
