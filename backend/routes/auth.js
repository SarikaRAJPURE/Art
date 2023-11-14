const express = require("express");
const router = require("express").Router();
const User = require("../models/UserModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const Joi = require("joi");
//verify users,we are gonna give then json web token
// after login process so whenever they try to make
//any request updating or deleting any user or product
//or cart we are just gonna verify if the user cart or
//order belongs to client or not.

//To create a user/register.
router.post("/register", async (req, res) => {
  //User validatio
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(200).required(),
    email: Joi.string().min(3).max(200).required().email(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists...");

  //after validating user create a user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // password:req.body.password
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRETE
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log("User Saved Successfully!");
  } catch (err) {
    console.log(err);
    res.status(404).send("The user cannot be created.");
    //res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  //validate data
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //----------------------------------------------

  try {
    const user = await User.findOne({ username: req.body.username });
    /* if(!user){
            return res.status(404).send("The user not found.");
        }  */
    !user && res.status(404).send("The user not found.Wrong credential");

    //console.log("user found");
    //decrypt password and convert to string to check.
    const hashedpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRETE
    );
    const Originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
    console.log(Originalpassword);

    Originalpassword !== req.body.password &&
      res.status(404).send("Wrong credential");

    //after finding user with right credential create a jon web token
    const accessToken = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRETE,
      { expiresIn: "3d" }
    );
    //Inorder to send user information withoutr password excluse password from user
    //other refers to users other creadential line email, username
    const { password, ...other } = user._doc; //user gets saved as user._doc inside DB
    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
