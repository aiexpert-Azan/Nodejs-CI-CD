const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Azure Pipeline CI/CD Demo!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

