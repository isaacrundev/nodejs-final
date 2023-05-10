import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainMenu from "./components/MainMenu";
import LoadingIcon from "../assets/LoadingIcon";
import Dropdown from "./components/Dropdown";

const timeGenerator = (iso8601) => {
  const time = new Date(iso8601);
  const timeArr = time.toString().split(" ");
  return `${timeArr[3]}-${timeArr[1]}-${timeArr[2]} ${timeArr[4].slice(0, -3)}`;
};

export default function Dashboard() {
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/post/all`
      );
      setPosts(res.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  const handleInputChange = (e) => {
    let { value } = e.target;
    // setInput((prev) => ({ ...prev, [name]: value }));
    setInput((prev) => ({
      ...prev,
      username: localStorage.getItem("username"),
      content: value,
    }));
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
                disabled={loading}
                type="submit"
                className="inline-flex items-center py-2 px-3.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                {loading ? <LoadingIcon /> : "Post"}
              </button>
            </div>
          </div>
        </form>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"></p>
        <div className="text-black text-xl font-bold py-4">Posts</div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {posts.map((post) => (
            <li className="mb-10 ml-4" key={post._id}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className=" flex flex-row gap-2">
                <div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {timeGenerator(post.createdAt)}
                  </time>
                </div>
                <div>
                  {localStorage.username === post.username && <Dropdown />}
                </div>
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
