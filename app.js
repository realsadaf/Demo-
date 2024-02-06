const express=require("express")
const router =require("./route/api.js")
const app= express();
const fs = require("fs")
const multer = require("multer")

 app.use('/',router)

 let storage = multer.diskStorage( Object , {
    destination: function (req,file,callBack) {
        callBack(null,'./uploads')
    },
    filename: function (req,file,callBack) {
        callBack(null, file.originalname)}
 })

 var upload=multer( this.options: {storage:storage})

 fs.writeFile("demo.txt","Hello World", function(req,res){
        if(err){
        return res.send("File Write Failed")}
    {
        return res.send("File Write Successful")
    }
})

module.exports=app;