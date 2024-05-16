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
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "No such user available" });
    } else if (bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email }, "shhhhh", { expiresIn: "1d" });
      res.cookie("token", token);
      res
        .status(200)
        .json({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      user.token = token;
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true, message: "Cookie Cleared" });
};
