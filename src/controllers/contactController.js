const { ObjectId } = require("mongodb");
const client = require("../helpers/client");

const contactCollection = client.db("bistroRestaurant").collection("contacts");

// create contact
const addedContact = async (req, res) => {
    const ContactData = req.body;
    const result = await contactCollection.insertOne(ContactData);
    res.status(201).json({ success: true, message: "Contact created", data: result });
}


const getAllContact = async (req, res) => {
  const Contacts = await contactCollection.find().toArray();
  res.status(200).json({ success: true, message: "All Contacts", data: Contacts });
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  const result = await contactCollection.deleteOne({ _id: new ObjectId(id) });
  res.status(200).json({ success: true, message: "Contact deleted", data: result });
};


module.exports = {
    addedContact,
    getAllContact,
    deleteContact
};
