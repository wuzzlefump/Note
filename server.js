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


//functionality

// navigate

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });












app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  