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
router.get("/:plan", (req, res) => {
  Friends.find({ Plan: req.params.plan }).then((plan) =>
    res.status(200).json({ plan: plan })
  );
});

// Post add new plan /friends/:plan
router.post("/", (req, res) => {
  const data = req.body;
  Friends.create(data).then((plan) => res.status(201).json({ plan: plan }));
});

// Patch update plan /friends/:plan
router.patch("/:plan", (req, res) => {
  Friends.find({ Plan: req.params.plan }).then((plan) => {
    const id = plan._id;
    const data = req.body;
    Friends.findByIdAndUpdate(id, data, { new: true }).then((plan) =>
      res.status(200).json({ plan: plan })
    );
  });
});

// Delete plan /Friends/:plan
router.delete("/:plan", (req, res) => {
  Friends.find({ Plan: req.params.dish }).then((plan) => {
    const id = plan._id;
    Friends.findByIdAndDelete(id).then(() => res.status(204));
  });
});

module.exports = router;
