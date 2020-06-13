const express = require('express');
const router = express.Router();

const Profile = require('../../database/profile');

// @route   GET api/profiles
// @desc    Get all Profiles
// @access  Public
// TODO

// @route   GET api/profiles/:id
// @desc    Get specific Profile
// @access  Public
// TODO

// @route   POST api/profiles
// @desc    Create a Profile
// @access  Private
router.post('/', auth, (req, res) => {
  const newProfile = {
    userId: req.body.userId
  };
  Profile.create(newProfile).then(profile => res.json(profile));
});

module.exports = router;
