import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
const PORT = 3000;
dotenv.config();
connectDB()
  .then(() => {
    console.log("Connected to MongoDb ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: { visitHistory: {
          timestamp: Date.now(),
        } },
      },
    );
    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Error redirecting:", err.message);
    res.status(500).json({ error: "Failed to redirect" });
  }
});
