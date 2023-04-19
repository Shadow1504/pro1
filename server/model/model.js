const mongoose=require('mongoose')

const det= new mongoose.Schema(
    {
        eid:
        {
            type:String,
            required:true
        },
        name:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true
        }
    }
)
const collect=mongoose.model('mv',det);
module.exports=collect;
