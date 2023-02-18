import socketIO from "socket.io-client";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Index from "./pages";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

// const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/logout" />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
