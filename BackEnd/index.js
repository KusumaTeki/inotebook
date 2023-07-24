const connectToDb = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
// const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(cors());
// Routes
app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));

connectToDb();
app.get("/", function (req, res) {
  res.send("Hello Kusuma");
});

app.listen(port, () => {
  console.log(`INotebook at http://localhost:${port}`);
});
