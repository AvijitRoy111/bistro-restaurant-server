const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

    // Import Routes
const menuRoutes = require("./src/routes/menuroutes");
const reviewRoutes = require("./src/routes/reveiwroutes");
const cartRoutes = require("./src/routes/cartroutes");
const  bookingRoutes = require("./src/routes/bookingroutes")
const orderRoutes = require("./src/routes/orderroutes")
const contactRoutes = require("./src/routes/contactroutes")
const usersRoutes= require("./src/routes/userroutes")

//Import Middleware
const client = require("./src/helpers/client");
const verifyToken = require("./src/midilewares/verifyToken");

const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

// ----------- MIDDLEWARES -----------
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// ----------- JWT CREATE -----------
// app.post("/jwt", async (req, res) => {
//   const user = req.body;
//   if (!user?.email)
//     return res.status(400).send({ success: false, message: "Email required" });

//   const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "365d" });

//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//   }).send({ success: true });
// });

// ----------- LOGOUT -----------
// app.get("/log-out", (req, res) => {
//   res.clearCookie("token", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//     maxAge: 0,
//   }).send({ success: true });
// });



 // ----------- ROUTES -----------
    app.use("/menuItems", menuRoutes);
    app.use("/reviews", reviewRoutes);
    app.use("/carts", cartRoutes);
    app.use("/orders", orderRoutes);
    app.use("/bookings", bookingRoutes);
    app.use("/contacts", contactRoutes);
    app.use("/users", usersRoutes);


// ----------- ROOT -----------
app.get("/", async (req, res) => {
  await client.db("admin").command({ ping: 1 });
  res.send("Solosphere Server is running 500");
});

// ----------- 404 -----------
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ----------- SERVER RUN -----------
//module.exports = app;
app.listen(port, () => console.log(`Solosphere Server running on port ${port}`));
