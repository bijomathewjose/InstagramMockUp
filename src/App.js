import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore"
import Messages from "./Pages/Messages/Messages"
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
