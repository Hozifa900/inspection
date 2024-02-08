const express = require("express");
// const { MongoClient } = require("mongodb");
const app = express();

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const dbName = "inspection";

// async function connectToMongo() {
//   try {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     const db = client.db(dbName);
//     // Additional database or routing operations go here

//     // Insert a new document into the user collection
//     const collection = db.collection("user");
//     const insertResult = await collection.insertOne({
//       name: "hozifa",
//       age: 30,
//     });
//     console.log("Document inserted", insertResult);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// connectToMongo();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8088, () => {
  console.log("server running on port 8080");
});
