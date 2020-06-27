const express = require('express');
const router = express.Router();

const Profile = require('../../database/profile');

// @route   GET api/profiles
// @desc    Get all Profiles
// @access  Public
router.get('/', (req, res) => {
    Profile
        .getAll()
        .then(profile => res.json(profile));
});

// @route   GET api/profiles/:id
// @desc    Get specific Profile
// @access  Public
router.get('/:id', (req, res) => {
    Profile
        .getOneById(req.params.id)
        .then(profile => res.json(profile));
});

// @route   POST api/profiles
// @desc    Create a Profile
// @access  Private
router.post('/', auth, (req, res) => {
  const newProfile = {
    user_id: req.body.user_id
  };
  Profile.create(newProfile).then(profile => res.json(profile));
});

module.exports = router;
