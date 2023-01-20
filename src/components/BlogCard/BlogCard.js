import React from 'react';
import './BlogCard.css';

export default function BlogCard(blog) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{blog.title}</div>
        <div className="subtitle">{blog.subtitle}</div>
        <div className="text">{blog.text}</div>
      </div>
      <div className="image">
        <img src={blog.image} />
      </div>
    </div>
  );
}
