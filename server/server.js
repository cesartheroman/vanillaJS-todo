const express = require("express");
const app = express();
const todos = require("./todos.js");

const PORT = process.env.PORT || 3000;

app.use(express.static("src"));

app.get("/todos", (req, res) => {
  res.send(JSON.stringify(todos)).status(200);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
