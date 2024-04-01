const User = require('../models/user');
const jwt = require('jsonwebtoken');

const createToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
};

// POST - creates a new user
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingEmail = await User.findOne({ email: email });
    
    if (existingEmail) {
      return res.status(400).json({ message: "Account for email already exists" });
    }
    
    const newUser = await User.create({
      email: email,
      password: password
    });
  
    
    const token = createToken(newUser._id);

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide an email and password"
      })
    } else {
      return res.status(201).json({
        newUser: newUser,
        token: token
      })
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
};

// POST - logs user in
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide an email and password"
      })
    };

    const user = await User.findOne({ email: email }).select("+password");

    if (!user || !await user.correctPassword(password, user.password)) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    };

    const token = createToken(user._id);

    return res.status(200).json({
      user: user.email,
      token: token
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}