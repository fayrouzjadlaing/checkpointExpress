const express = require("express");
const app = express();
const logger = require("./middlewares/logger");

app.use(logger.mdw1);

const path = require("path");
const port = 5000;
app.listen(port, () => console.log("server is runnig on port 5000"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Home.html"));
});
app.get("/contact us", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact us.html"));
});
app.get("/Ourservice", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Ourservice.html"));
});
