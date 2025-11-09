// const { ObjectId } = require("mongodb");
// const client = require("../helpers/client");

// const cartsCollection = client.db("bistroRestaurant").collection("carts");

// // Add item to cart
// const createCarts = async (req, res) => {
//   const { name, image, recipe, price, userName, userEmail } = req.body;

//   if (!name || !image || !recipe || !price || !userEmail)
//     return res.status(400).send({ success: false, message: "Missing fields!" });

//   const newCart = { name, image, recipe, price, userName, userEmail, addedAt: new Date() };
//   const result = await cartsCollection.insertOne(newCart);
//   res.send(result);
// };

// // Get user's cart
// const getCarts = async (req, res) => {
//   const query = req.query.email ? { userEmail: req.query.email } : {};
//   const result = await cartsCollection.find(query).toArray();
//   res.send(result);
// };

// // Update order status
// const updateCartStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   const result = await cartsCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: { status } }
//   );

//   res.send(result);
// };

// // Get all orders (for ManageOrder page)
// const getAllOrders = async (req, res) => {
//   const result = await cartsCollection.find().toArray();
//   res.send(result);
// };

// module.exports =
// {
//   createCarts,
//   getCarts,
//   updateCartStatus,
//   getAllOrders
// };
