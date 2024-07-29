require("dotenv").config();

const { connect } = require("mongoose");

const { MONGO_URI } = process.env;

module.exports = async () => {
  await connect(`${MONGO_URI}`);
};
