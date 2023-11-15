const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const secretKey = process.env.SECRET_KEY;

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers);
  

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    console.log('Received Token:', token);

    const decoded = jwt.verify(token, secretKey);
    console.log(decoded)
    console.log('Decoded Token:', decoded);
    const user = await User.findById(decoded.userId);

    // const user = await User.findOne({ _id: decoded.userId, token });
    console.log(user);
    if (!user) {
      throw new Error('Invalid token - User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error validating token:', error);
    return res.status(403).json({ message: 'Forbidden - Invalid token', error: error.message });
  }
};

module.exports = authenticateToken;
