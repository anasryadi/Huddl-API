const express = require("express");
const Friends = require("../models/Friends");
const router = express.Router();

// Get all friends
router.get("/", (req, res) => {
  Friends.find({}).then((friends) =>
    res.status(200).json({ friends: friends })
  );
});
// Get single plan /friends/:plan
router.get('/:plan', (req, res) => {
    Friends.find({Plan: req.params.plan})
    .then(plan => res.status(200).json({plan: plan}))
})
