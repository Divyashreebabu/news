const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const NewsModel = require ("./models/news.js");
const SignupModel = require("./models/Signup.js");
const SigninModel = require("./models/signin.js");

app.listen(3001, () => {});
app.get("/",(req ,res)=>{
res.json({name: "divya" });
});
app.post("/api/addnews",async(req,res)=>{
    try{
const news = await NewsModel.create(req.body);
res.status(200).json(news);
console.log(req.body);
    }catch (error){
        res.send(500);
    }
});
app.post("/api/signup",async(req,res)=>{
    try{
const Signup = await SignupModel.create(req.body);
res.status(200).json(Signup);
console.log(req.body);
    }catch (error){
        res.send(500);
    }

});

app.post("/api/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await SignupModel.findOne({ email: email });

        if (user) {
            
            if (user.password === password) {
                res.json({ message: "success" });
            } else {
                res.json({ message: "password incorrect" });
            }
        } else {
            res.json({ message: "no record found" });
        }
    } catch (error) {
    
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});


app.get("/api/news",async(req,res)=>{
    try{
        const news=await NewsModel.find({});
        res.status(200).json(news);
        console.log(req.body);
    }
    catch(error){
        res.send(500);
    }
});
app.get("/api/news",async(req,res)=>{
    try{
        const{id}=req.params;
        const news =await NewsModel.findById(id);
        res.status(200).json(news);
    }catch(error){
        res.send(500);
    }
});
app.put("/api/news/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        constnews=await NewsModel.findByIdAndUpdate(id,req.body);
        if(!news){
            return res.status(404).json({message:"News not found"});
        }
        const updatedNews=await NewsModel.findById(id);
        res.status(200).json(updatedNews);
    }catch(error){
        res.send(500);
    }
});
app.delete("/api/news/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        constnews=await NewsModel.findByIdAndUpdate(id,req.body);
        if(!news){
            return res.status(404).json({message:"News not found"});
        }
        const updatedNews=await NewsModel.findById(id);
        res.status(200).json("deleted");
    }catch(error){
        res.send(500);
    }
});
mongoose
.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connect to db");
});   
mongoose
.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connect to db");
});    
