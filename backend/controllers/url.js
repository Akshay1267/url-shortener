import URL from "../models/url.js";
import { nanoid } from "nanoid";

export async function createShortUrl(req, res) {
  try {
    const body = req.body;
    console.log("Request body:", body);
    if (!body.url) return res.status(400).json({ error: "Url is required" });
    const shortId = nanoid(8);
    console.log("Creating short URL with ID:", shortId);
    
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    console.log("Short URL created successfully");
    return res.json({ id: shortId });
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).json({ error: "Failed to create short URL" });
  }
}

export async function getAnalytics(req, res) {
  try {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    if (!result) return res.status(404).json({ error: "Short URL not found" });
    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (err) {
    console.error("Error fetching analytics:", err.message);
    return res.status(500).json({ error: "Failed to fetch analytics" });
  }
}

