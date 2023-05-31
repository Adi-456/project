const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  }
);

const User=mongoose.model("User", UserScehma);
module.exports=User