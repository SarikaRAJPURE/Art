const express = require("express");
const router = express.Router();
const User = require('../models/UserModel');
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAutherisation,verifyTokenAndAdmin } = require("./verifyToken");

router.get('/user', (req, res) => {
   res.send("user test is successful");
});

router.post('/postuser', (req, res) => {
   const username = req.body.username;
   res.send(username);
});

router.put('/:id', verifyTokenAndAutherisation, async (req, res) => {
   //check weather that token belongs to that client or not
   /* if(req.user.id === req.params.id || req.user.isAdmin){

   } */

   // if user is gonna update password encrypt it before sending to DB.
   if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
         req.body.password,
         process.env.PASS_SECRETE
      ).toString()
   }
   try {
     // console.log("body" + req.body.username);
      const updatedUser = await User.findByIdAndUpdate(
         req.params.id, {
         $set: req.body  //take everything inside re1.body and set it.
      }, { new: true });//its not gonna return u updated user so set new:true
      console.log("body" + req.body.username);

      res.status(200).json(updatedUser);
      console.log(updatedUser);
   } catch (err) {
      res.status(500).json(err);
   }
});
//delete a user
router.delete('/:id',verifyTokenAndAutherisation, async (req, res) => {
   try {
         let user =await User.findByIdAndDelete(req.params.id);
        user && res.status(204).json("User has been deleted");
        res.status(404).json({ success: false, message: "The user not found" });
   } catch (err) {
      res.status(500).json(err);
   }
});
//get a specific user
router.get('/find/:id',verifyTokenAndAdmin, async (req, res) => {
   try {
      //to get a user without a password(exclude some fields from user use select)
         const user = await User.findById(req.params.id).select('-password');
         if (!user) {
            res.status(500).json({ success: false });
        }
        res.json(user);
         /* const { password, ...other } = user._doc;  //user gets saved as user._doc inside DB 
         res.status(200).json(other); */
   } catch (err) {
      res.status(500).json(err);
   }
});

//get all users
router.get('/',verifyTokenAndAdmin, async (req, res) => {
  //http://localhost:3000/api/users?noofusers=1
   const query = req.query.noofusers
  // console.log(query);
   try {
         const users = query 
         ?await User.find().select('-password').sort({_id:-1}).limit(query)
         : await User.find().select('-password');

         

         res.status(200).json(users);

   } catch (err) {
      res.status(500).json(err);
   }
});
//get user stats
router.get('/stats',verifyTokenAndAdmin,async (req, res) => {
const date = new Date();
const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
console.log(lastYear);
try {
   //user statstics per month
   const data = await User.aggregate([
      {$match:{createdAt:{$gte:lastYear}}},
      {
         $project:{
           month: {$month:"$createdAt"}
         }
      },
      {
         $group:{
            _id:"$month",
            total:{$sum:1}
         }
      }
   ]);
   data ? res.status(200).json(data)
   : res.status(404).json("Data not found");
} catch (error) {
   res.status(500).json(error);
}
});
//to get users count
router.get(`/get/userCount`, async (req, res) => {
   const userCount = await User.countDocuments();
   if (!userCount) {
       res.status(500).json({ success: false });
   }
   res.send({count:userCount});
});
module.exports = router;