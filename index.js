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

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "your host",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

connection.connect(
  (err = {
    if(err) {
      console.error("Ошибка подключения к базе данных: " + err.stack);
      return;
    },
  })
);
