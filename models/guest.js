const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  pictureUrl: String,
  website: String,
  techRoleCategory: {
    type: String,
    enum: ['Tech Sales', 'Customer Success', 'UX/UI Design', 'Product Management', 'QA', 'Marketing', 'Engineering'],
    required: true
  },
  podcasts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Podcast'
  }]
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
