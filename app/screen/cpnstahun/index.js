const express = require('express');
const router = express.Router();
const connection_string = "mongodb+srv://rosyitama:rosyitama@cluster0.flxyval.mongodb.net/soal?retryWrites=true&w=majority"

const { MongoClient } = require("mongodb");

router.get("/", async (req, res) => {
  try {
    const client = new MongoClient(connection_string, { useNewUrlParser: true });
    await client.connect();
    const database = client.db("soal");
    const collection = database.collection("cpnstahun");

    // Perform MongoDB operations here
    const result = await collection.find({}).toArray();

    res.json(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;