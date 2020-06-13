const express = require('express');
const router = express.Router();

require('dotenv').config();

const User = require('../../database/user');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
// TODO

// @route   GET /api/users/:name
// @desc    Get specific user
// @access  Public
// TODO

// @route   POST /api/users
// @desc    Create a user
// @access  Public
router.post('/', (req, res) => {
	// TODO
});

module.exports = router;
