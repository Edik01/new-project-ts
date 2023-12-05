const morgan = require("morgan");

app.use(logger("dev"));

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const cats = new Schema({
  nickname: String,
  age: Number,
});
