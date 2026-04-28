const express = require('express');
const {MongoClient} = require('mongodb');
const User = require('../database/user');
const route = express.Router();

route.post('/', async (req,res) =>{
    const{firstName,lastName,email,favoriteColor,birthday} = req.body;
    let user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.favoriteColor = favoriteColor;
    user.birthday = birthday;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;