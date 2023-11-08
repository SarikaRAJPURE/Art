const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const secret_key = process.env.STRIPE_SECRET_KEY;
debugger;
console.log(secret_key);

router.get("/session", (req, res) => {
  console.log("Successful");
  res.send(secret_key);
});

/* router.post("/create-checkout-session", async (req, res) => {
  /*  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3001/success",
    cancel_url: "http://localhost:3001/cart",
  }); 

  //res.send({ url: session.url });
  res.send("success");
}); */

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
module.exports = router;
