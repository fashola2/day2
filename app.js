const express = require("express")
const app = express()
const session = require("express-session")
const mustache = require("mustache-express")
const mongoose = require("mongoose")
const MongoClient = require("mongodb")
const bodyParser = require("body-parser")
const mongooseSession = require("mongoose-session")
mongoose.Promise = require("bluebird")
app.engine("mustache", mustache())
app.set('views', './views')
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

const url = "mongodb://127.0.0.1:27017/robots"
mongoose.connect(url)


// app.engine('mustache', mustache())
//
// app.set('view engine', 'mustache')
// app.use(express.static("public"))

const users = require ("./routes/users")
app.use(users)


app.listen(3000, function(){
  console.log("Express started on port 3000")
})
