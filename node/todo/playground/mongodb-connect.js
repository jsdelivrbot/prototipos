const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp")

    // db.collection("Todos").insertOne({
    //     "test":"Something to do",
    //     "completed":false
    // }, (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert todo", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection("Users").insertOne({
        "name":"Uriel",
        "age":24,
        "location":"Los Angeles"
    }, (error, result) => {
        if(error) {
            return console.log('There was an MongoDB error', error)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close();
});