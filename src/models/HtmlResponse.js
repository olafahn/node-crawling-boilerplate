import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const htmlResponse = new Schema({
  url: String,
  body: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('htmlResponse', htmlResponse);
