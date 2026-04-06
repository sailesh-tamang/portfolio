require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const existing = await Admin.findOne({ username: 'sailesh_admin' });
    if (existing) {
      console.log('Admin already exists. Skipping seed.');
    } else {
      await Admin.create({ username: 'sailesh_admin', password: 'Admin@1234' });
      console.log('Default admin created: sailesh_admin / Admin@1234');
    }
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

seed();
