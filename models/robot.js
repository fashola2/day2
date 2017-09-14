// require the stuff
const mongoose = require("mongoose")
// do the stuff

// define the schema
const robotSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  username: { type: String, required: true },
  password:  String,
  email: String,
  phonenumber: String,
  university: String,
  company: String,
  job: String,
  skills: String
})

const newRobot = mongoose.model("Robot", robotSchema)
// create a model using that schema

// export the stuff
module.exports = newRobot
