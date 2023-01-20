import { useEffect } from 'react';
import { useState } from 'react';
import { getBlogs } from '../services/blog.js';

export async function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogs();
      setBlogs(res);
    };
    fetchData();
  }, []);
  return blogs;
}
