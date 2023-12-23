const { MongoClient, Db } = require("mongodb");
const { model } = require("mongoose");
const url = "mongodb://localhost:27017";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error("error connect in MongoDB:", err);
    return;
  }
});
db.cats.insertOne({
  name: "barsik",
  age: 3,
  features: ["ходить у тапки", "дає себе гладити", "рудий"],
});
module.exports = port;
