const axios=require("axios")


exports.ind=(req,res)=>
{
    axios.get("http://localhost:5000/api/alldata").then((result) => {
        res.render("index",{results:result.data});
        // console.log("come",result);     
    }).catch((err) => {
        console.log(err);
    });
}

exports.form=(req,res)=>
{
    res.render("form");
}
exports.edit=(req,res)=>
{
    res.render("edit");
}