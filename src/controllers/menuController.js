const { ObjectId } = require("mongodb");
const client = require("../helpers/client");

const menuItemsCollection = client.db("bistroRestaurant").collection("menueITems");


// 1. Get All MenuItems
const getMenuItems = async (req, res) => {
  const MenuItems = await menuItemsCollection.find().toArray();
  res.status(200).json({ success: true, message: "All MenuItems", data: MenuItems });
};



module.exports = {
    getMenuItems,

};
