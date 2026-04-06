const express = require('express');
const Inquiry = require('../models/Inquiry');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// GET /api/inquiries/stats — must be defined before /:id routes
router.get('/stats', async (req, res) => {
  try {
    const [total, unread] = await Promise.all([
      Inquiry.countDocuments(),
      Inquiry.countDocuments({ isRead: false }),
    ]);
    res.json({ total, unread });
  } catch (err) {
    console.error('Stats error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error('Fetch inquiries error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// PATCH /api/inquiries/:id/read
router.patch('/:id/read', async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    inquiry.isRead = !inquiry.isRead;
    await inquiry.save();
    res.json(inquiry);
  } catch (err) {
    console.error('Toggle read error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/inquiries/:id
router.delete('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.json({ message: 'Inquiry deleted' });
  } catch (err) {
    console.error('Delete inquiry error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
