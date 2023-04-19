const collect=require("../model/model");
const axios=require("axios")

exports.create=(req,res)=>
{
    const testcollect=new collect(
    {
        eid:req.body.eid,
        name:req.body.name,
        email:req.body.email
    })
    testcollect.save().then(doc=>
        {
        // console.log(doc);
        res.send(doc);
        }
    )
}
exports.find=(req,res)=>
{
    collect.find().then(user=>
    {
        res.send(user);
    }
    )
}
exports.delete=(req,res)=>
{
    const id = req.params.id;
    collect.findByIdAndDelete(id).then(user=>
        {
            res.send(user)
            // console.log(user)
        })
}
exports.edit=(req,res)=>
{
    const id = req.params.id;
    collect.findById(id).then(user=>
        {
            res.send(user)
            
            console.log("data fetched in console",user)

     
        })
}