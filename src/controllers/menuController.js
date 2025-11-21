// const { ObjectId } = require("mongodb");
// const { getCollection } = require("../helpers/mongo");


// // 1. Get All MenuItems
// const getMenuItems = async (req, res) => {
//   const menuItemsCollection = await getCollection("bistroRestaurant", "menueITems");
//   const MenuItems = await menuItemsCollection.find().toArray();
//   res.status(200).json({ success: true, message: "All MenuItems", data: MenuItems });
// };

// // 2.add a menuItems
// const createMenuItems = async (req, res) =>{
//   const menudata = req.body;
//   const menuItemsCollection = await getCollection("bistroRestaurant", "menueITems");
//   const result = await menuItemsCollection.insertOne(menudata);
//   res.status(200).json({success:true, massage:'add menuItems', data:result})
// }

// // delete menu items
// const deleteMenuItem = async (req, res) => {
//   try {
//     const id = req.params.id;
//     let query = { _id: new ObjectId(id) };
//     const menuItemsCollection = await getCollection("bistroRestaurant", "menueITems");
//     let result = await menuItemsCollection.deleteOne(query);
//     if (result.deletedCount === 0) {
//       query = { _id: id };
//       result = await menuItemsCollection.deleteOne(query);
//     }

//     if (result.deletedCount === 1) {
//       res.status(200).json({ success: true, message: "Menu item deleted" });
//     } else {
//       res.status(404).json({ success: false, message: "Item not found" });
//     }
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ success: false, message: "Failed to delete", error });
//   }
// };

// // 🆕 Update menu item
// const updateMenuItem = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     let query = { _id: new ObjectId(id) };
//   const menuItemsCollection = await getCollection("bistroRestaurant", "menueITems");
//   let result = await menuItemsCollection.updateOne(query, { $set: updatedData });
//     if (result.matchedCount === 0) {
//       query = { _id: id };
//       result = await menuItemsCollection.updateOne(query, { $set: updatedData });
//     }

//     if (result.modifiedCount > 0) {
//       res.status(200).json({ success: true, message: "Menu item updated successfully" });
//     } else {
//       res.status(404).json({ success: false, message: "Item not found or no change" });
//     }
//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).json({ success: false, message: "Failed to update item", error });
//   }
// };

// module.exports = {
    getMenuItems,
    createMenuItems,
    deleteMenuItem,
     updateMenuItem

};
