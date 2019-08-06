var ex=require('express')
const router=ex.Router();
module.exports=router;
router.get("/",function(req,res){
    res.render('emphome')
})
router.get("/new",function(req,res){
    res.send("NEW EMPLOYEE")
})
router.get("/view",function(req,res){
    res.send("view EMPLOYEE")
})
router.get("/delete",function(req,res){
    res.send("DELETE EMPLOYEE")
})
router.get("/edit",function(req,res){
    res.send("EDIT EMPLOYEE")
})