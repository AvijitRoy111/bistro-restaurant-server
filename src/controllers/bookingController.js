const { ObjectId } = require("mongodb");
const { getCollection } = require("../helpers/mongo");

// Get All Bookings
const getBookings = async (req, res) => {
  const bookingsCollection = await getCollection("bistroRestaurant", "bookings");
  const bookings = await bookingsCollection.find().toArray();
  res.status(200).json({ success: true, message: "All bookings", data: bookings });
};

// Create Booking
const createBooking = async (req, res) => {
  const bookingData = req.body;
  const bookingsCollection = await getCollection("bistroRestaurant", "bookings");
  const result = await bookingsCollection.insertOne(bookingData);
  res.status(200).json({ success: true, message: "Booking created", data: result });
// };

//  Update Booking Status
const updateBooking = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  const bookingsCollection = await getCollection("bistroRestaurant", "bookings");
  const result = await bookingsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } }
  );

  res.status(200).json({ success: true, message: "Booking status updated", data: result });
// };

// // Delete Booking
// const deleteBooking = async (req, res) => {
//   const id = req.params.id;
//   const bookingsCollection = await getCollection("bistroRestaurant", "bookings");
//   const result = await bookingsCollection.deleteOne({ _id: new ObjectId(id) });

//   if (result.deletedCount === 0) {
//     return res.status(404).json({ success: false, message: "Booking not found" });
//   }

//   res.status(200).json({ success: true, message: "Booking deleted successfully", data: result });
// };

// module.exports = {
//   getBookings,
//   createBooking,
//   updateBooking,
//   deleteBooking,
// };
