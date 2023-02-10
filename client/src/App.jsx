import socketIO from "socket.io-client";
import Login from "./pages/user-validation/Login";

import "./App.css";

// const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL)
socketIO.connect(import.meta.env.VITE_SERVER_URL);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
