const express = require('express');
const router = express.Router();

require('dotenv').config();

const User = require('../../database/user');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    User
        .getAll()
        .select('phone', 'email', 'name', 'date', 'is_active')
        .then(user => res.json(user));
});

// @route   GET /api/users/:name
// @desc    Get specific user
// @access  Public
router.get('/:name', (req, res) => {
    User
        .getOneByName(req.param.name)
        .select('phone', 'email', 'name', 'date', 'is_active')
        .then(user => res.json(user));
});

// @route   POST /api/users
// @desc    Create a user
// @access  Public
router.post('/', (req, res) => {
	// TODO
});

module.exports = router;
