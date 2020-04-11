const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:
    {   type:String,
        required: true
    },
    email:
    {   type:String,
        required: true
    }

});
const users=mongoose.model('users',UserSchema);
module.exports=users;