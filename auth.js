const jwt = require('jsonwebtoken');
const { readJson, USERS_FILE } = require('../config/db');

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'college_complaint_secret', {
    expiresIn: '30d',
  });
};

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Token missing' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'college_complaint_secret');

    const users = readJson(USERS_FILE);
    const user = users.find((item) => item.id === decoded.id || item.email === decoded.email);
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    req.user = { ...user, password: undefined };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Access denied for this role' });
    }
    next();
  };
};

module.exports = { generateToken, protect, authorize };
