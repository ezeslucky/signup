const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/signup', upload.single('resume'), async (req, res) => {
  const { name, email, phone, qualifications, jobPreferences } = req.body;
  const resume = req.file.path;

  try {
    const newUser = new User({
      name,
      email,
      phone,
      qualifications,
      jobPreferences,
      resume,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
