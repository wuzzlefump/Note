// set up dependency
let fs = require('fs')
let express = require("express");
let path = require("path");
let db = require('./db/db.json')
let router = express.Router()
// set up port
let app = express();
let PORT = process.env.PORT || 3000;
// set up middle
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


//functionality

// navigate

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });


app.get("/api/notes", function(req,res){
res.json(db)
});


app.post("/api/notes", function(req, res){
let newnote = req.body
db.push(newnote)
res.json(db)
});

app.delete("/api/notes/:id", function(req,res){
console.log(req.params.id)
for(let i = 0;i<db.length;i++){
if(req.params.id == db[i].id){
db.splice(i,1)
}
}
res.json(db)
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  