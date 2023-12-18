const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error("error connect in MongoDB:", err);
    return;
  }
});
