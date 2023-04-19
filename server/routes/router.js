const express=require('express')
const route=express.Router();

const exp=require("../exports/exports");
const controller=require("../controller/controller")

route.get("/",exp.ind)
route.get("/add",exp.form)

route.post('/api',controller.create)
route.get('/api/alldata',controller.find)
route.get('/edit',exp.edit)
route.get('/api/alldata/:id',controller.edit);
route.delete('/api/alldata/:id',controller.delete);


module.exports=route;