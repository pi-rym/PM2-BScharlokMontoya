require("dotenv").config();
const app = require("./src/server");
const conDb = require("./src/config/conDb");

const { PORT } = process.env;

conDb()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error al conectar la BDD");
  });
