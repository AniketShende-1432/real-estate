const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        const { name, email, usertype, phone, agreement, password } = req.body;
        // Check if a user with the given email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            // If user already exists, return an error response
            return res.status(200).json({ message: "User Already Exists" });
        }
        const hpassword = bcrypt.hashSync(password);
        // If user doesn't exist, create a new user
        const user = new User({ name, email, usertype, phone, agreement, password:hpassword });
        await user.save();
        // Send success response
        res.status(200).json({ message:"SignUp Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: "Please sign up first" });
        }
        if (req.body.usertype === "Agent/Builder") {
            if (user.usertype !== "Agent" && user.usertype !== "Builder") {
                return res.status(200).json({ message: "Incorrect UserType" });
            }
        } else if (req.body.usertype !== user.usertype) {
            return res.status(200).json({ message: "Incorrect UserType" });
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(200).json({ message: "Incorrect password" });
        }

        // If sign-in is successful, return user data (excluding password)
        const { password, ...userData } = user._doc;
        return res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

// {
//     "email":"abc@gmail.com",
//     "password":"admin123"
// }
module.exports = router;