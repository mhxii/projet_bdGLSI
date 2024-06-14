const express = require("express");
const cors = require('cors');
const logger = require("morgan");
require('dotenv').config();

const db = require("./models");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

db.connect().then(() => {
  require("./routes/publications")(app);

  app.get("/", (req, res) => {
    res.json({ message: "L'API fonctionne correctement" });
  });

  app.listen(PORT, () => {
    console.log(`Backend express server is running on port ${PORT}.`);
  });
}).catch(err => {
  console.log("La connexion a la BD a echoue", err);
});
