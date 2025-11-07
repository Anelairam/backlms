const express = require("express");
const app = express();
import nodeRoutes from "./routes/nodeRoutes.js";
const PORT = 7878;

app.use("/api/nodes", nodeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
