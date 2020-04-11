const mongoose=require('mongoose');
const SubmissionSchema=new mongoose.Schema({
    image:
    {   type:String,
        required: true
    },
    author:
    {   type:String,
        required: true
    },
    competition:
    {   type:String,
        required: true
    }

});
const submissions=mongoose.model('submissions',SubmissionSchema);
module.exports=submissions;