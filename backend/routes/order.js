const express = require("express");
const router = express.Router();
const Order = require('../models/OrderModel');
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAutherisation, verifyTokenAndAdmin } = require("./verifyToken");

//create
router.post('/', verifyToken, async (req, res) => {
    //console.log(req.body);
    const newOrder = new Order(req.body);
    try {     
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update order
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedl = await Order.findByIdAndUpdate(
            req.params.id, {
            $set: req.body  //take everything inside re1.body and set it.
        }, { new: true });//its not gonna return u updated product so set new:true

        res.status(200).json(updatedOrder);
        //console.log(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete user order
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        let order = await Order.findByIdAndDelete(req.params.id);
        order && res.status(204).json("Order has been deleted");
        res.status(404).json({ success: false, message: "The product not found" });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user orders
router.get('/find/:userId', verifyTokenAndAutherisation, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});


//get all orders
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});


// Get Monthly Income stats
//this month and previous month
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    //console.log(date.getMonth());
    const lastMonthsDate = new Date(date.setMonth(date.getMonth()-1));
    lastMonth = lastMonthsDate.getMonth();
    //console.log(lastMonth);
    const previousMonthsDate = new Date(new Date().setMonth(lastMonthsDate.getMonth() - 1));
    previousMonth = previousMonthsDate.getMonth();
    //console.log(previousMonth);
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonthsDate } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
              {  $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            },
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;