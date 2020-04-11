const mongoose=require('mongoose');
const CompetitionSchema=new mongoose.Schema({
    name:
    {   type:String,
        required: true
    },
    description:
    {   type:String,
        required: true
    },
    author:
    {   type:String,
        required: true
    }

});
const competitions=mongoose.model('competitions',CompetitionSchema);
module.exports=competitions;