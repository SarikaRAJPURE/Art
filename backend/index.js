const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DBConnection Successfull!");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors()); // if name of your backend is app
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.get("/api/test", (req, res) => {
  console.log("successful");
  res.send("successful");
});

app.listen(port, () => {
  console.log(`Backend Server is running on ${port}!`);
});
