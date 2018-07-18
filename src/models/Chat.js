const mongo = require('mongoose');
const { Schema  } = mongo;

const chatShema = new Schema  ({
  user: String,
  msg: String,
  created_at: {
    type: Date,
    default: Date.now
  }
}) ;

module.exports = mongo.model('Chat',chatShema);
