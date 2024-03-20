require("dotenv").config();

const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

module.exports = async () => {
  await mongoose.connect(`${MONGO_URI}`);
};
