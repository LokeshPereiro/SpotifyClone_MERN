const express = require("express");
const User = require("../models/User");
const { generateJsonToken } = require("../middlewares/generateJsonToken");
const jwToken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      user = await User.findOne({ email: username });
    }

    if (!user) {
      return res.json({ success: false, message: "Invalid Credentials" });
    } else {
      const verify = await bcrypt.compare(password, user.password);

      if (!verify)
        return res.json({ success: false, message: "Invalid Credentials" });
      else {
        let token = await generateJsonToken(user._id);
        // console.log(token, user);

        return res.json({
          success: true,
          token,
          user,
          message: "login successful",
        });
      }
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.post("/signup", async (req, res) => {
  const { email, username, password, DOB, gender } = req.body;

  if (!email || !username || !password || !DOB || !gender)
    return res.json({ success: false, message: "All fields are required" });
  try {
    const hashPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashPass,
      DOB,
      gender,
    });
    console.log(user);
    if (user) {
      let token = await generateJsonToken(user._id);

      console.log(token);
      res.json({ success: true, message: "User Created", user, token });
    } else {
      res.json({ success: false, message: "Some error creating Account" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "internal server error" });
  }
});
router.get("/profile", async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token)
      return res
        .status(401)
        .json({ success: true, message: "User Unauthorized" });

    const data = jwToken.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(data.id);

    if (user) {
      return res.json({ user, success: true, message: "User found" });
    } else {
      return res.status(404).json({ success: true, message: "User not found" });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Session expired! LogIn again",
    });
  }
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({ users, success: true, message: "users found" });
});
module.exports = router;
