const express = require("express")
const router = express.Router();
const data = require("../models/data.js")
const app = express()
const mustache = require("mustache-express")
const robots = require("../models/robot")
app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))

router.get("/", function(req, res) {
  res.render("daily", {
    data: data.users
  })
})

//app.get('/users/:id')

router.get('/users/:id', function(request, response) {

  const robot = parseInt(request.params.id)
  let lane = false;
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot) {
      lane = data.users[i]
    }
  }
  response.render("lane", {
    lane: lane
  })
})

router.get("/register", function(req, res) {
  res.render("register", {

  })
})

router.post("/newRobot", function (req, res) {
  res.redirect("/")
})

module.exports = router
