const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = (mongo_uri) => {
  return mongoose.connect(
    mongo_uri,
    console.log("~Connected to Mongodb Atlas Successfully..")
  );
};

// mongoose
//   .connect(connectionURL)
//   .then(() => console.log("~Connected to Mongodb Atlas Successfully..."))
//   .catch((err) => console.log(err));

module.exports = connectDB;
