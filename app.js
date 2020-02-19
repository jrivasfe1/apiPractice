// this gets a package into this file
const express = require("express");

// this executes express, afeter executing it will give us the ability to execute routes
const app = express();

// routes are as follow
app.get('/',(req,res) =>{
    res.send("We are on home");
})

// How do we start listening to the server 

app.listen(3000)

// https://www.youtube.com/watch?v=vjf774RKrLc