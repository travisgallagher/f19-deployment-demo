const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); 

app.use(express.json());
app.use(cors());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
}); 

// Heroku uses and makes the .env, and use their own port number. 
// this just assigns that to the variable port. 
const port = process.env.PORT || 4005; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 
