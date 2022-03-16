const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); 

app.use(express.json());
app.use(cors());


// Middleware

app.use(express.static(path.join(__dirname, "../public"))); 
app.use("/images", express.static(path.join(__dirname, "../images"))
//app.use(express.static(path.join(__dirname, "../images"))); 
//dont need because .html
//app.use("/styles", express.static(path.join(__dirname, "../public/index.css")))

// EndPoints

// if you had a ton of pictures in a folder. 
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public"))
// })

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// }); 

// app.get("/styles", function(req, res) {
//     res.sendFile(path.join(path.join(__dirname, "../public/index.css")))
// }) 

// Heroku uses and makes the .env, and use their own port number. 
// this just assigns that to the variable port. 
const port = process.env.PORT || 4005; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 
