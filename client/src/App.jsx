import socketIO from "socket.io-client";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/dashboard" />
      <Route path="/logout" />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
