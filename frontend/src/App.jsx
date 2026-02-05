import { useState } from "react";
import axios from "axios";
import Galaxy from "./Galaxy.jsx";

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
      {/* <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Galaxy />
      </div> */}

      <div style={{ padding: "40px" }}>
        <h2 >URL Shortener Test</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "300px" }}
          />
          <button type="submit">Shorten</button>
        </form>

        {shortId && (
          <p>
            Short URL:{" "}
            <a href={`http://localhost:3000/${shortId}`} target="_blank">
              http://localhost:3000/{shortId}
            </a>
          </p>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default App;
