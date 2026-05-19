const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get("/", (req, res) =>{
    res.send("hey");
});

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "maaz ahmad",
        username: "maazahmad123",
        email: "testo@gmail.com"
    });
    res.send(createdUser);
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});

app.get("/update", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username:"maaz123"}, {name: "maazahmad"}, {new: true});
    res.send(updateduser);
});

app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({username: "maaz123"});
    res.send(deletedUser);
});

app.listen(3000);