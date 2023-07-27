const express=require('express')
const mangoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home");
})
const authMiddle=(req,res,next)=>{
    console.log("hiiii");
    console.log(req.body);
    const {email,password} =req.body; 
    if(password=="12345678"){
        next();
        console.log("d")

    }
    else{
        res.send("password is incorrect");
        console.log("incorrect");
    }
   

}
app.post("/Login",authMiddle,(req,res)=>{
    res.send("login success");
})
app.post("/reg",(req,res)=>{
    res.send("palayad campus");
})


const authroute=require("./src/routes/auth")
app.use("/api",authroute)
mangoose.connect(process.env.DB).then(()=>{
    console.log("connect");
}).catch(err=>{
    console.log("not connect");
})
app.listen(5000,()=>{
    console.log("server listening at port 5000");

});
