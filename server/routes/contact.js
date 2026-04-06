const express = require('express');
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      const inquiry = await Inquiry.create({ name, email, subject, message });
      res.status(201).json({ message: 'Message sent successfully', inquiry });
    } catch (err) {
      console.error('Contact submission error:', err.message);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

module.exports = router;
