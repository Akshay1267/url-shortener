import user from "../models/user.js";

export async function createUser(req,res) {
    const {name, email,password} = req.body;
    await user.create({
        name,
        email,
        password
    });
    res.status(201).json({message: "User created successfully"});
}