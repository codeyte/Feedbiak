const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const guestSchema = Schema({
  providerId: {
    type: String,
  },
  companyIds: {
    type: String,
  },
  fullname: {
    type: String,
    require: true,
  },
});

mongoose.model('guests', guestSchema);
