// // src/controllers/reviewController.js
// const { ObjectId } = require("mongodb");
// const client = require("../helpers/client");

// const reviewsCollection = client.db("bistroRestaurant").collection("reveiws");


// // 1. Get All reveiws
// const getreveiws = async (req, res) => {
//   const reveiws = await reviewsCollection.find().toArray();
//   res.status(200).json({ success: true, message: "All reveiws", data: reveiws });
// };



// module.exports = {
//     getreveiws
// };
