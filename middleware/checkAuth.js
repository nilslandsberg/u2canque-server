const jwt = require('jsonwebtoken');
const User = require('../models/user');

require('dotenv').config();

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log("user token: ", token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;

    User.findOne({ _id: id })
      .exec()
      .then(user => {
        if (!user) {
          return res.status(401).json({ message: 'Authorization Failed'});
        } else {
          req.userData = user;
          console.log('Authorization Successful');
          return next();
        }
      })
      .catch(error => res.status(500).json(error));
  } catch (error) {
    return res.status(401).json({ message: 'Authorization Failed'})
  }
};

module.exports = checkAuth