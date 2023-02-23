import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainMenu from "./components/MainMenu";
import LoadingIcon from "../assets/LoadingIcon";
import Dropdown from "./components/Dropdown";

const postValues = {
  username: localStorage.getItem("username"),
  content: "",
};

export default function Dashboard() {
  const [input, setInput] = useState(postValues);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/post/all`
      );
      setPosts(res.data.reverse());
      // console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateClick = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/post/create`,
        input
      );

      if (result.status === 200) {
        // console.log(result);
        setLoading(false);
        fetchNotes();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="px-10 py-3">
        <MainMenu />
        <form onSubmit={handleCreateClick}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="content" className="sr-only">
                Your post
              </label>
              <textarea
                id="content"
                rows="3"
                name="content"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Say something..."
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2 px-3.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                {loading ? <LoadingIcon /> : "Post"}
              </button>
            </div>
          </div>
        </form>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"></p>
        <div className="text-black text-xl">Posts</div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {posts.map((post) => (
            <li className="mb-10 ml-4" key={post._id}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className=" flex flex-row">
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {post.createdAt}
                </time>
                <Dropdown />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {post.username.charAt(0).toUpperCase() + post.username.slice(1)}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {post.content}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
