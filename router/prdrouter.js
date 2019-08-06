var exp=require('express')

const rout=exp.Router();
// Router.set("view engine","ejs")
// Router.set("views",'../src/view')
module.exports=rout;
//loc:7889/prd
rout.get("/",function(req,res){
    res.render('prds')
//     res.sendFile(__dirname+'/prds.html')
})
rout.get("/new",function(req,res){
    res.send("product added")
})
rout.get("/view",function(req,res){
    res.send("product view")
})
rout.get("/delete",function(req,res){
    res.send("product delete")
})
rout.get("/edit",function(req,res){
    res.send("product edit")
})