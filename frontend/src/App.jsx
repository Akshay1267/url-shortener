import { useState } from "react";
import axios from "axios";
import Galaxy from "./Galaxy.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx"
import {Routes, Route} from "react-router-dom"

function App() {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/url", {
        url: url,
      });

      setShortId(res.data.id); // or res.data.shortId
    } catch (err) {
      setError("Backend not responding ❌");
      console.error(err);
    }
  };

  return (
    <>
    <Routes>
      {/* <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Galaxy />
      </div> */}
        {/* <Route  <Signup /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
