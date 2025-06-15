// console.log("application is running"), 

const express = require('express');
const app = express();

const coonectDB = require("./config/database");
const User = require("./models/user")

//const {adminAuth, userAuth} = require("./middleware/auth")

app.use(express.json());

app.post("/signUp", async (req, res) => {
    //Creating a new instance of the user
    const user = new User(req.body)
    try {
        await user.save();
        res.send("user saved successfully")

    } catch (err) {
        res.status(400).send("Error while saving the user" + err.message);
    }

});

app.get("/user", async (req, res) => {
    // const userEmail = req.query.emailId;
    const userEmail = req.body.emailId;
    try {
        res.send(await User.find({ emailId: userEmail }))
    }
    catch (err) {
        res.status(400).send("something went wrong")
    }
})

app.get("/feed", async (req, res) => {

    try {
        res.send(await User.find({}));
    }
    catch (err) {
        res.status(400).send("something went wrong")
    }
})

app.patch("/user", async (req, res) => {

    try {
        await User.findOneAndUpdate({ emailId: req.body.emailId }, req.body)
        res.send(await User.find({}));
    }
    catch (err) {
        res.status(400).send("something went wrong")
    }
})

app.delete("/user", async (req, res) => {
    try {
        await User.findOneAndDelete({ emailId: req.body.emailId }, req.body);
        res.send("User Deleted successfully");

    } catch (err) {
        res.status(400).send("something went wrong" + err.message);
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