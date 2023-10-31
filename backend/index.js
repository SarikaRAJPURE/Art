const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoute =require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const cors = require('cors');

const app=express();
const port=3000;

mongoose.connect(process.env.MONGO_URL
, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log("DBConnection Successfull!");})
.catch((err)=>{console.log(err);});
app.use(cors());  // if name of your backend is app
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);

app.get('/api/test', (req, res) => {
console.log("successful");
});

 app.listen(port,() =>{
    console.log(`Backend Server is running on ${port}!`);
 });