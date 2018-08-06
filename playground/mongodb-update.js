//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('Failed to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b6825ae6ec348e5bc9f148b'
    // )}, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // } ).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6817c950f0ea005eed2352')
    }, {
        $set: {
            name: 'Nicolas'
        },
        $inc: {
            age: 1
        }
    },  {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //client.close();
});