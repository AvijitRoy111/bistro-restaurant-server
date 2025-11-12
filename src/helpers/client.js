const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority";
const DB_USER="Bistro-Boss"
const DB_PASS="8g7E6aM3XgoxfyfQ"

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.tkbsmtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
