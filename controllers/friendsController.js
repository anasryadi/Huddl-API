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
router.get("/:id", (req, res) => {
  Friends.findById(req.params.id).then((plan) =>
    res.status(200).json({ plan: plan })
  );
});

// Post add new plan /friends/:plan
router.post("/", (req, res) => {
  const data = req.body;
  Friends.create(data).then((plan) => res.status(201).json({ plan: plan }));
});

// Patch update plan /friends/:plan
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Friends.findByIdAndUpdate(id, data, { new: true }).then((plan) =>
    res.status(200).json({ plan: plan })
  );
});

// Delete plan /Friends/:plan
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Friends.findByIdAndDelete(id)
    .then(() => res.status(204))
    .then(() => {
      Friends.find({}).then((items) => {
        res.status(200).json({ items: items });
      });
    });
});

module.exports = router;
