const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexRoute");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

console.log("hola");
module.exports = app;
