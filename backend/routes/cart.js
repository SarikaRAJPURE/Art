const express = require("express");
const router = express.Router();
const Cart = require('../models/CartModel');
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAutherisation, verifyTokenAndAdmin } = require("./verifyToken");

router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update cart
router.put('/:id', verifyTokenAndAutherisation, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, {
            $set: req.body  //take everything inside re1.body and set it.
        }, { new: true });//its not gonna return u updated product so set new:true

        res.status(200).json(updatedCart);
        //console.log(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete user cart
router.delete('/:id', verifyTokenAndAutherisation, async (req, res) => {
    try {
        let cart = await Cart.findByIdAndDelete(req.params.id);
        cart && res.status(204).json("Cart has been deleted");
        res.status(404).json({ success: false, message: "The product not found" });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user cart
router.get('/find/:userId',verifyTokenAndAutherisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});


//get all products
router.get('/',verifyTokenAndAdmin, async(req, res) => {
    try {
        const carts= await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;