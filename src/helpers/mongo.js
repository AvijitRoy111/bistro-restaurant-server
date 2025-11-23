const client = require("./client");

async function ensureConnected() {
  if (!client) throw new Error("MONGODB_URI is not configured");
  // The MongoClient instance has its own connect() method.
  if (!client.topLevelConnected) {
    await client.connect();
    client.topLevelConnected = true;
  }
}

async function getCollection(dbName, collName) {
  await ensureConnected();
  return client.db(dbName).collection(collName);
}

module.exports = {
  getCollection,
};
