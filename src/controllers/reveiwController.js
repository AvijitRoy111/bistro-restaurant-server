const { ObjectId } = require("mongodb");
const { getCollection } = require("../helpers/mongo");


// 1. Get All reveiws
const getreveiws = async (req, res) => {
  const reviewsCollection = await getCollection("bistroRestaurant", "reveiws");
//   const reveiws = await reviewsCollection.find().toArray();
//   res.status(200).json({ success: true, message: "All reveiws", data: reveiws });
// };

// // 2. Create reveiw
// const createreveiws = async (req, res) => {
//   const reveiwData = req.body;
//   const reviewsCollection = await getCollection("bistroRestaurant", "reveiws");
//   const result = await reviewsCollection.insertOne(reveiwData);
//   res.status(200).json({ success: true, message: "reveiws created", data: result });
// };



// module.exports = {
//     getreveiws,
//     createreveiws
// };
