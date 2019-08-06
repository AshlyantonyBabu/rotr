var exp=require('express')
//adding router
var prdrout=require("./router/prdrouter")
var emprout=require("./router/emprouter")
const app=exp()
app.set('view engine',"ejs")
app.set("views","./src/view")
//pass it to prdrout start anything with prd
app.use("/prd",prdrout)
app.get("/",function(req,res){
    res.render('home')
// res.sendFile(__dirname+"/src/view/home.html")
})
app.use("/emp",emprout)
// app.get("/",function(res,req){
//     res.render()
// })
app.listen(8000,function(req,res){
    console.log("server is ready")
})