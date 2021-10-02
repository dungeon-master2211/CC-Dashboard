// import express framework
const express=require("express");
// initialise an app instance
const app= express();
// server shouldn't stop until you stop it. So,make it listen to a port.
// Configure a port
const port=5000;
// create a get request handler
app.get("/",(req,res)=>{
    res.json('Welcome to Community Classroom');
});
// makeapp listen to port.
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});
// so to not refresh our seever again and again we will use nodemon server. so in pkg.json modify scripts start from node server to nodemon server
