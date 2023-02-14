import socketIO from "socket.io-client";
import LoginSignup from "./pages/LoginSignup";
import "./App.css";

// const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);

function App() {
  return (
    <div className="App">
      <LoginSignup />
    </div>
  );
}

export default App;
