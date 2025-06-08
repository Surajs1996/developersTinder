// console.log("application is running")

const express = require('express');

const app = express();


app.use("/user",
    (req, res, next) => {
        console.log("Handling to the route handler 1");
        //res.send("Handling to the route handler 1")
        next();
        //res.send("Handling to the route handler 1")
    },
    (req, res, next) => {
        console.log("Handling to the route handler 2");
        //res.send("Handling to the route handler 2");
        next();
    },
    (req, res, next) => {
        console.log("Handling to the route handler 3");
        //res.send("Handling to the route handler 3");
        next();
    },
    (req, res, next) => {
        console.log("Handling to the route handler 4");
        //res.send("Handling to the route handler 4");
        next();
    },
    (req, res, next) => {
        console.log("Handling to the route handler 5");
        res.send("Handling to the route handler 5");
    }
);

// app.use("/test", (req,res)=>{
//     res.send("You are hitting the test");
// })

// app.use("/hello", (req,res)=>{
//     res.send("Hello world !!!");
// })

// app.use("/", (req,res)=>{
//     res.send("Dashboard page is loaded");
// })

// app.use("/user", (req,res) => {
//     res.send("HAHAHAHAHAHAHAH");
// })

// app.get("/user", (req,res) => {
//     res.send("users data sent successfully");
// })

// app.post("/user", (req,res) => {
//     res.send("Saved data to database");
// })

// app.delete("/user", (req,res) => {
//     res.send("User deleted successfully");
// })

// app.get("/a/", (req,res) => {
//     res.send("users data fetch successfully");
// })

// app.get("/.*fly$/", (req,res) => {
//     res.send("users data fetch successfully");
// })

// app.get("/ab\\?c", (req,res)=>{
//     res.send("checking the data with routing filter ?")
// })

// app.get("/ab*cd", (req,res)=>{
//     res.send("checking the data with routing filter *")
// })

// app.get("/ab\\+cd", (req,res)=>{
//     res.send("checking the data with routing filter \\+")
// })


// app.get("/user/:userId/:name", (req,res) => {
//     res.send("users data fetch successfully");
// })

// app.get("/user", (req,res) => {
//     res.send("users data sent successfully");
// })



app.listen(3000, () => {
    console.log("server is running successfully on port 3000");
});