const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Lead = require("./models");
/* CREATE lead */
router.post("/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* READ all leads */
router.get("/leads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.put("/leads/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* DELETE lead */
router.delete("/leads/:id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
});

module.exports = router;
