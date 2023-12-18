const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  create,
  login,
  checkToken,
  update,
};

async function create(req, res) {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json("Bad Credentials");
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

//Helper Functions
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

async function update(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) throw new Error("User not found");

    // Update user data
    user.name = req.body.name;
    user.email = req.body.email;

    // Save the updated user data
    await user.save();

    // Create a new token with the updated user data
    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}
