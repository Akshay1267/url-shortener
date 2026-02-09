import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await user.create({
      name,
      email,
      password: hashedPassword
    });
    
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    
    const existingUser = await user.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET || "secret-key",
      { expiresIn: "7d" }
    );
    
    res.status(200).json({ 
      message: "Login successful",
      token,
      user: { 
        id: existingUser._id,
        name: existingUser.name, 
        email: existingUser.email 
      }
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: error.message });
  }
}