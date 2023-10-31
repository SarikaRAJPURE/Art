const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true, unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},   
} ,{timestamps: true}
);

UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

UserSchema.set('toJSON',{
    virtuals:true
});
module.exports = mongoose.model("User",UserSchema);