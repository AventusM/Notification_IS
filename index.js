const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/status", (_req, res) => {
  res.send({ status: "error", message: "An api error message" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
