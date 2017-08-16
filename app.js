const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require('./data');


app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))
app.get("/", function(req, res){
  res.render("daily",{
    data: data.users
  })
})

//app.get('/users/:id')

app.get('/users/:id', function(request, response){

  const robot = parseInt(request.params.id)
  let lane = false;
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot){
      lane = data.users[i]
    }
  }
  response.render("lane", {
    lane: lane
  })
})

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
