const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");
    db.collection("Users").find({"name":"Uriel"}).toArray().then((docs) => {
        // console.log(docs)
        console.log(JSON.stringify(docs, undefined, 2))
    }, (error) => {
        if(error) {
            console.log(error);
        }
    })
});

// .findOneAndUpdate({"name":"Uriel"}).toArray()
// .findOneAndDelete({"name":"Uriel"}).toArray()