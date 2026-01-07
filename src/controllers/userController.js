const { ObjectId } = require("mongodb");
const { getCollection } = require("../helpers/mongo");

// 1.Create user (with duplicate check)
const createUsers = async (req, res) => {
  try {
    const userData = req.body;

    // check if user already exists by email
  const usersCollection = await getCollection("bistroRestaurant", "users");
  const existingUser = await usersCollection.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(200).json({ success: true, message: "User already exists" });
    }

    // insert new user
  const result = await usersCollection.insertOne(userData);
    res.status(200).json({ success: true, message: "User added successfully", data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating user", error: error.message });
  }
};

// 2 Get all users
const getAllUsers = async (req, res) => {
  const usersCollection = await getCollection("bistroRestaurant", "users");
  const result = await usersCollection.find().toArray();
  res.status(200).json({ success: true, message: "Get all users", data: result });
};

// // 3 Delete user
// const deleteUser = async (req, res) => {
//   const id = req.params.id;
//   const query = { _id: new ObjectId(id) };
//   const usersCollection = await getCollection("bistroRestaurant", "users");
//   const result = await usersCollection.deleteOne(query);
//   res.status(200).json({ success: true, message: "User deleted", data: result });
// };

// module.exports = {
//   createUsers,
//   getAllUsers,
//   deleteUser,
// };



 



