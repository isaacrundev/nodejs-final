import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/post/all`
      );

      setPosts(res.data.reverse());
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div className="text-black text-xl">Posts</div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {posts.map((post) => (
          <li className="mb-10 ml-4" key={post._id}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {post.createdAt}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {post.username}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {post.content}
            </p>
          </li>
        ))}
      </ol>
    </>
    // <>
    //   <div className="text-black text-xl">Posts</div>
    //   <ol className="relative border-l border-gray-200 dark:border-gray-700">
    //     <li className="mb-10 ml-4">
    //       <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //       <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    //         March 2022
    //       </time>
    //       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //         Marketing UI design in Figma
    //       </h3>
    //       <p className="text-base font-normal text-gray-500 dark:text-gray-400">
    //         All of the pages and components are first designed in Figma and we
    //         keep a parity between the two versions even as we update the
    //         project.
    //       </p>
    //     </li>
    //     <li className="ml-4">
    //       <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //       <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    //         April 2022
    //       </time>
    //       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //         E-Commerce UI code in Tailwind CSS
    //       </h3>
    //       <p className="text-base font-normal text-gray-500 dark:text-gray-400">
    //         Get started with dozens of web components and interactive elements
    //         built on top of Tailwind CSS.
    //       </p>
    //     </li>
    //   </ol>
    // </>
  );
}
