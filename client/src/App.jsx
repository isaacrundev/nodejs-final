import socketIO from "socket.io-client";
import DevLogin from "./pages/dev/DevLogin";
import "./App.css";

const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);

function App() {
  return (
    <div className="App">
      <DevLogin />
    </div>
  );
}

export default App;
