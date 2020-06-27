const express = require('express');
const router = express.Router();

// @route   GET /api/matching
// @desc    Get matching
// @access  Private
router.get('/', (req, res) => {
    // TODO extract number of matchings to get
    // sort list of candidates with most compatability
    // get the top k user profiles
    // return
});

module.exports = router;
