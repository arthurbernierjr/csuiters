const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  spotifyUrl: String,
  youtubeUrl: String,
  guests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest'
  }]
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
