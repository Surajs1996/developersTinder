// console.log("application is running")

const express = require('express');

const {adminAuth, userAuth} = require("./middleware/auth")

const app = express();

app.use("/admin", adminAuth )

app.get("/admin/getAllData", (req, res) =>{
     res.send("Data fetched successfully")
})

app.delete("/admin/deleteAllData", (req, res) =>{
     res.send("Data deleted successfully")
})

app.post("/admin/addAdmin", (req, res) =>{
     res.send("Data deleted successfully")
})

app.get("/user/login",  (req, res) =>{
     res.send("Data fetched successfully")
})

app.get("/user/getAllUserData",userAuth, (req, res) =>{
     res.send("Data fetched successfully")
})

app.listen(3000, () => {
    console.log("server is running successfully on port 3000");
});