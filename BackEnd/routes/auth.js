const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRRET = "This is Ishitha.";

// Route:1
// Creating a user

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("email", "Enter a valid emailId.").isEmail(),
    body("password", "Password must be atleast 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;

    // if there is an error returns bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // let user = await User.findOne({ success, email: req.body.email });
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists.",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      user.save();
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRRET);
      // console.log(token);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(success, "Internal Server  error occured.");
    }
  }
);

// Route:2
//Authenticating a user Login (verifying Login )'

router.post(
  "/login",
  [
    body("email", "Enter a valid emailId.").isEmail(),
    body("password", "Password cannot be blank.").exists(),
  ],
  async (req, res) => {
    let success = false;

    // if there are errors returns bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ success, error: "Enter correct credentials " });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        res.status(400).json({ error: "Enter correct credentials " });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRRET);
      success = true;
      // console.log(token);
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server  error occured.");
    }
  }
);
// Route:3
// Get logged-in user information
router.post("/getuser", fetchuser, async (req, res) => {
  let success = false;
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    success = true;
    res.status(200).send({success, user});
  } catch (error) {
    console.error(error.message);
    res.status(500).send(success, "Internal Server  error occured.");
  }
});

module.exports = router;
