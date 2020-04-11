const mongoose=require('mongoose');
const SubmissionLikeSchema=new mongoose.Schema({
    submission:
    {   type:String,
        required: true
    },
    author:
    {   type:String,
        required: true
    }

});
const submission_likes=mongoose.model('submission_likes',SubmissionLikeSchema);
module.exports=submission_likes;