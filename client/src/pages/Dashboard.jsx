import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostList from "./components/PostList";
import MainMenu from "./components/MainMenu";

const postValues = {
  username: localStorage.getItem("username"),
  content: "",
};

export default function Dashboard() {
  const [input, setInput] = useState(postValues);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateClick = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/post/create`,
        input
      );
      if (result.status === 200) {
        console.log(result);
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
                Post
              </button>
            </div>
          </div>
        </form>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"></p>
        <PostList />
      </div>
    </>
  );
}
