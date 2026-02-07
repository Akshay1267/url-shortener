import { useState } from "react";

export default function Home() {
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
    return(
        <>
        <div style={{ padding: "40px" }}>
        <h2>URL Shortener Test</h2>

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
    )
}