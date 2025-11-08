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

// module.exports = { createCarts, getCarts };
