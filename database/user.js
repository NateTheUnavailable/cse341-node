const {MongoClient} = require('mongodb');

const user = new {MongoClient}.Schema;({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    favoriteColor:{
        type:String
    },
    birthday:{
        type:String
    },
})

module.exports = User = {MongoClient}.model('user',user);