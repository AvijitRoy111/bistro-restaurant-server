// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const client = require("./src/helpers/client");

// // Import Routes
// const menuRoutes = require("./src/routes/menuroutes");
// const reviewRoutes = require("./src/routes/reveiwroutes");
// const cartRoutes = require("./src/routes/cartroutes");

// // Import Middleware
// const verifyToken = require("./src/midilewares/verifyToken");

// const app = express();
// const port = process.env.PORT || 5000;

// // ----------- MIDDLEWARES -----------
// app.use(cors({
//   origin: true,
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // ----------- JWT CREATE -----------
// app.post("/jwt", async (req, res) => {
//   const user = req.body;
//   if (!user?.email)
//     return res.status(400).send({ success: false, message: "Email required" });

//   const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "365d" });

//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//   }).send({ success: true, token });
// });

// // ----------- LOGOUT -----------
// app.get("/logout", (req, res) => {
//   res.clearCookie("token", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//   }).send({ success: true });
// });

// // ----------- DATABASE CONNECTION + SERVER START -----------
// async function runServer() {
//   try {
//     await client.connect();
//     console.log(" Database connected successfully!");

    // ----------- ROUTES -----------
    app.use("/menuItems", menuRoutes);
    app.use("/reviews", reviewRoutes);
    app.use("/carts", cartRoutes);


    // ----------- ROOT -----------
    app.get("/", async (req, res) => {
      try {
        await client.db("admin").command({ ping: 1 });
        res.send("bistroBoss Server is running port 5000 !");
      } catch (error) {
        console.error(" Ping failed:", error);
        res.status(500).send("Database connection failed");
      }
    });

    // ----------- 404 HANDLER -----------
    app.use((req, res) => {
      res.status(404).json({ success: false, message: "Route not found" });
    });

    // ----------- SERVER RUN -----------
    app.listen(port, () => console.log(`bistroBoss Server running on port ${port}`));
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

runServer();
