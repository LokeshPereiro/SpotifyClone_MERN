const jsonWebToken = require("jsonwebtoken");

exports.generateJsonToken = async (id) => {
  //We need user id to generate unique jwt-token
  let token = jsonWebToken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
