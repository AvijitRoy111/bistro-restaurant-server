const { MongoClient, ServerApiVersion } = require("mongodb");

// Build the URI from environment variables for security and portability.
// Prefer a full MONGODB_URI; fall back to DB_USER/DB_PASS if provided.
const uri = process.env.MONGODB_URI || (process.env.DB_USER && process.env.DB_PASS)
  ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tkbsmtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  : null;

if (!uri) {
  console.warn("No MongoDB URI configured. Set MONGODB_URI or DB_USER+DB_PASS in environment.");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Export an object with a connect() method and a `client` property that is set after connect.
const exported = {
  client: null,
  async connect() {
    if (!uri) throw new Error("MongoDB URI is not configured.");
    if (!exported.client) {
      exported.client = new MongoClient(uri, options);
      await exported.client.connect();
    }
    return exported.client;
  },
};

module.exports = exported;
