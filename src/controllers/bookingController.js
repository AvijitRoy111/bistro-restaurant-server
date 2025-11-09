// src/controllers/reviewController.js
const { ObjectId } = require("mongodb");
const client = require("../helpers/client");

const bookinsCollection = client.db("bistroRestaurant").collection("bookings");


// // 1. Get All reveiws
// const getbookings = async (req, res) => {
//     const bookings = await bookinsCollection.find().toArray();
//     res.status(200).json({ success: true, message: "All reveiws", data: bookings });
// };

// // 2. Create reveiw
// const createbookings = async (req, res) => {
//     const bookingsData = req.body;
//     const result = await bookinsCollection.insertOne(bookingsData);
//     res.status(200).json({ success: true, message: "reveiws created", data: result });
// };


// // 3.update manage booking
// const updatebooking = async (req, res) => {
//   const id = req.params.id;
//   const { status } = req.body;

//   const result = await bookinsCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: { status } }
//   );

//   res.status(200).json({ success: true, message: "Booking status updated", data: result });
// };



// module.exports = {
//     getbookings,
//     createbookings,
//     updatebooking
// };
