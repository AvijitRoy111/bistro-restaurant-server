const { ObjectId } = require("mongodb");
const client = require("../helpers/client");

const cartsCollection = client.db("bistroRestaurant").collection("carts");

// ✅ Place Order to Database (status: pending)
const placeOrder = async (req, res) => {
  try {
    const order = req.body;
    order.status = "pending";
    order.addedAt = new Date();

    const result = await cartsCollection.insertOne(order);
    res.status(201).json({ success: true, message: "Order placed", data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Get Pending Orders
const getPendingOrders = async (req, res) => {
  try {
    const result = await cartsCollection.find({ status: "pending" }).toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Update Order Status
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await cartsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    res.json({ success: true, message: "Status updated", data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Delete Order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await cartsCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true, message: "Order deleted", data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  placeOrder,
  getPendingOrders,
  updateOrderStatus,
  deleteOrder,
};
