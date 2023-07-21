const connectToDb = require("./db");
const express = require("express");
const app = express();
const port = 5000;
// const bcrypt = require('bcryptjs');
app.use(express.json());

// Routes
app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));

connectToDb();
app.get("/", function (req, res) {
  res.send("Hello Kusuma");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
