const express = require('express');
const app = express();
const PORT = 7878;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});