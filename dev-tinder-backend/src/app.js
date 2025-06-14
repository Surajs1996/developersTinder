// console.log("application is running"), 

const express = require('express');
const app = express();

const coonectDB = require("./config/database");
const User = require("./models/user")

//const {adminAuth, userAuth} = require("./middleware/auth")

app.post("/signUp", async (req, res)=>{
   const  user = new User({
        firstName : "Suraj",
        lastName : "Salunkhe",
        age:28,
        emailId : "suraj@salunkhe.com",
        password: "123456",
        gender:"male"
    })
    try{
    await user.save();
    res.send("user saved successfully")

    } catch(err){
        res.status(400).send("Error while saving the user" + err.message);
    }

})

coonectDB().then(() => {
    console.log("DB connection successfull");
    app.listen(3000, () => {
    console.log("server is running successfully on port 3000");
});
}).catch(() => {
    console.log("DB connection failed");
})

// app.use("/admin", adminAuth )

// app.get("/admin/getAllData", (req, res) =>{
//      res.send("Data fetched successfully")
// })

// app.delete("/admin/deleteAllData", (req, res) =>{
//      res.send("Data deleted successfully")
// })

// app.post("/admin/addAdmin", (req, res) =>{
//      res.send("Data deleted successfully")
// })

// app.get("/user/login",  (req, res) =>{
//      res.send("Data fetched successfully")
// })

// app.get("/user/getAllUserData",userAuth, (req, res) =>{
//      res.send("Data fetched successfully")
// })

// app.listen(3000, () => {
//     console.log("server is running successfully on port 3000");
// });