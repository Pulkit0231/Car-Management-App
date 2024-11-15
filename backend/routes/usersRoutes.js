const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.send(user);
        } else {
            return res.status(400).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        return res.status(400).json({ message: "An error occurred", error });
    }
});


router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newuser = new User({ username: req.body.username, password: hashedPassword });
        await newuser.save();
        res.send('User registered successfully');
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Username already exists" });
        }
        return res.status(400).json({ message: "An error occurred", error });
    }
});



module.exports = router