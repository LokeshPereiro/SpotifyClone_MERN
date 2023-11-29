const express = require("express");
const User = require("../Models/User");
const { generateJsonToken } = require("../middlewares/generateJsonToken");

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      user = await User.findOne({ email: username });
    }

    if (!user) {
      return res.json({ success: false, message: "Invalid Credentials" });
    } else {
      if (user.password !== password)
        return res.json({ success: false, message: "Invalid Credentials" });
      else {
        let token = await generateJsonToken(user._id);
        console.log(token, user);

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
  console.log(req.body);
  const { email, username, password, DOB, gender } = req.body;

  if (!email || !username || !password || !DOB || !gender)
    return res.json({ success: false, message: "All fields are required" });
  try {
    const user = await User.create({
      email,
      username,
      password,
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
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({ users, success: true, message: "users found" });
});
module.exports = router;
