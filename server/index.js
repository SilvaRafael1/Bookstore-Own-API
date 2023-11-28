const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

const uri = "mongodb://127.0.0.1:27017";
mongoose.connect(uri, { dbName: "db_Prova",});
requireDir("./models");

app.use(cors())
app.use(express.json())
app.use("/api", require("./routes"));

app.listen(3000, () => {
  console.log("Exemplo de aplicativo ouvindo a porta 3000");
});
