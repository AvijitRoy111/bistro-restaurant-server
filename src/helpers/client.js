const { MongoClient, ServerApiVersion } = require("mongodb");

// Build the URI from environment variables for security and portability.
// Prefer a full MONGODB_URI; fall back to DB_USER/DB_PASS if provided.
const uri = process.env.MONGODB_URI || (process.env.DB_USER && process.env.DB_PASS)
  ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tkbsmtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  : null;

if (!uri) {
  console.warn("No MongoDB URI configured. Set MONGODB_URI or MONGODB_URI in environment.");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Create the MongoClient instance immediately (so controllers can call client.db(...) at import time).
const mongoClient = uri ? new MongoClient(uri, options) : null;

// Export the MongoClient instance directly. The instance already provides a .connect()
// method that can be used to establish the connection when needed.
module.exports = mongoClient;
