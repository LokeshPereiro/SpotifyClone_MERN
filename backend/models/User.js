const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  playlists: [
    {
      playlist_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
