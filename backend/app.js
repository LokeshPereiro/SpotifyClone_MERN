const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;
app.use("api/user", require("./routes/user"));
app.listen(port, () => {
  console.log(`http;//localhost:${port}`);
});
