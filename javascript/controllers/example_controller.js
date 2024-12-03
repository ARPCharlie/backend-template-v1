const User = require('../models/example_model');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const users = User; 
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
};