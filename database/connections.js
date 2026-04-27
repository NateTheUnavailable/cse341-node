const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb+srv://dbuser:dbuser@cluster0.s03plx4.mongodb.net/?appName=Cluster0";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
        console.log('db connected..!')
    }catch (e){
        console.error(e)
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);

module.exports = connectDB;
