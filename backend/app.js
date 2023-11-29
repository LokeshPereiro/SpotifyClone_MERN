const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./db");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`~Server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
