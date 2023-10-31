const express = require("express");
const router = express.Router();
const Product = require('../models/ProductModel');
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAutherisation, verifyTokenAndAdmin } = require("./verifyToken");

router.post('/', verifyTokenAndAutherisation, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update product
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
            $set: req.body  //take everything inside re1.body and set it.
        }, { new: true });//its not gonna return u updated product so set new:true

        res.status(200).json(updatedProduct);
        //console.log(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});
//delete a product
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        product && res.status(204).json("Product has been deleted");
        res.status(404).json({ success: false, message: "The product not found" });
    } catch (err) {
        res.status(500).json(err);
    }
});
//get a specific product
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all products
router.get('/', async (req, res) => {
    //http://localhost:3000/api/products?noofproducts=1
    const query = req.query.noofproducts
    const qCategory = req.query.category
    //console.log(query);
    try {
        let products;
        if (query) {
            products = await Product.find().sort({ createdAt: -1 }).limit(query)
        } else if(qCategory) {
            products = await Product.find({
                categories:{
                    $in:[qCategory],
                },
            });
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);

    } catch (err) {
        res.status(500).json(err);
    }
});

//to get products count
router.get(`/get/productCount`, async (req, res) => {
    const productCount = await Product.countDocuments();
    if (!productCount) {
        res.status(500).json({ success: false });
    }
    res.send({count:productCount});
 });

module.exports = router;