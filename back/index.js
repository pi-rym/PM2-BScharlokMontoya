require("dotenv").config();
const app = require("./src/server");
const conectDb = require("./src/config/conectDb");
const { PORT } = process.env;

conectDb()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error al conectar la BDD", err.message);
  });
