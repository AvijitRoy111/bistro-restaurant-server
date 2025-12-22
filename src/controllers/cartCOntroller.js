const { ObjectId } = require("mongodb");
const { getCollection } = require("../helpers/mongo");

// Add item to cart
const createCarts = async (req, res) => {
  const { name, image, recipe, price, userName, userEmail } = req.body;

  if (!name || !image || !recipe || !price || !userEmail)
    return res.status(400).send({ success: false, message: "Missing fields!" });

  const cartsCollection = await getCollection("bistroRestaurant", "carts");
  const newCart = { name, image, recipe, price, userName, userEmail, addedAt: new Date() };
  const result = await cartsCollection.insertOne(newCart);
  res.send(result);
};

// Get user's cart
const getCarts = async (req, res) => {
  const query = req.query.email ? { userEmail: req.query.email } : {};
  const cartsCollection = await getCollection("bistroRestaurant", "carts");
  const result = await cartsCollection.find(query).toArray();
  res.send(result);
};

// Update order status
const updateCartStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const cartsCollection = await getCollection("bistroRestaurant", "carts");
  const result = await cartsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } }
  );

//   res.send({ success: true, data: result });
// };

// // Get all or filtered orders (for ManageOrder)
// const getAllOrders = async (req, res) => {
//   const status = req.query.status;
//   const query = status ? { status } : {};
//   const cartsCollection = await getCollection("bistroRestaurant", "carts");
//   const result = await cartsCollection.find(query).toArray();
//   res.send(result);
// };


// // Delete order
// const deleteOrder = async (req, res) => {
//   const id = req.params.id;
//   const cartsCollection = await getCollection("bistroRestaurant", "carts");
//   const result = await cartsCollection.deleteOne({ _id: new ObjectId(id) });
//   res.status(200).json({ success: true, message: "order deleted", data: result });
// };

// module.exports =
// {
//   createCarts,
//   getCarts,
//   updateCartStatus,
//   getAllOrders,
//   deleteOrder
// };
