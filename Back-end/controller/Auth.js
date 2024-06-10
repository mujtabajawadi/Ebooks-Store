const { User } = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

exports.createUser = async (req, res) => {
  const { email } = req.body;
  const registeredUser = await User.findOne({ email });
  if (registeredUser) {
    return res.json({ message: "User already exists!" });
  }
  const user = new User(req.body);

  const hash = bcrypt.hashSync(req.body.password, 10);

  user.password = hash;

  try {
    const response = await user.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "No such user available" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ email }, "shhhhh", { expiresIn: "1d" });

    // Set token in cookie (optional, if needed)
    res.cookie("token", token, { httpOnly: true });

    // Update user token (if storing token in DB is needed)
    user.token = token;
    await user.save();

    // Respond with user details and token
    return res.status(200).json({
      message: "Login Success",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true, message: "Cookie Cleared" });
};
