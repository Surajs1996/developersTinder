// console.log("application is running")

const express = require('express');

const app = express();


// app.use("/test", (req,res)=>{
//     res.send("You are hitting the test");
// })

// app.use("/hello", (req,res)=>{
//     res.send("Hello world !!!");
// })

// app.use("/", (req,res)=>{
//     res.send("Dashboard page is loaded");
// })

app.use("/user", (req,res) => {
    res.send("HAHAHAHAHAHAHAH");
})

app.get("/user", (req,res) => {
    res.send("users data sent successfully");
})

app.post("/user", (req,res) => {
    res.send("Saved data to database");
})

app.delete("/user", (req,res) => {
    res.send("User deleted successfully");
})



app.listen(3000, ()=>{
    console.log("server is running successfully on port 3000");
});