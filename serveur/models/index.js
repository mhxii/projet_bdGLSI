const { MongoClient } = require('mongodb');
require('dotenv').config();

const db = {};
const client = new MongoClient(process.env.MONGODB_URI);

db.connect = async () => {
  try {
    await client.connect();
    console.log("Connected to the database!");
    db.client = client;
    db.publications = client.db("DBLP").collection("publis");
  } catch (error) {
    console.error("Cannot connect to the database!", error);
    process.exit();
  }
};

module.exports = db;
