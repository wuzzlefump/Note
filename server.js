// set up dependency
let fs = require('fs')
let express = require("express");
let path = require("path");

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

  return fs.readFile(__dirname + "/db/db.json", 'utf8', function(err, data) {
    if (err) throw err;
    obj =JSON.parse(data)
    res.json(obj);
  });

});











app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  