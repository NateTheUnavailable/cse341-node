const {MongoClient} = require('mongodb');

async function connectDB() {
    const uri = "mongodb+srv://dbuser:dbuser@cluster0.s03plx4.mongodb.net/?appName=Cluster0";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('db connected..!')
    }catch (e){
        console.error(e)
    }
    finally {
        await client.close();
    }
};

module.exports = connectDB;
