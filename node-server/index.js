
const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
main().catch(err=>console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/homeDecoration');
     console.log('db connected')
    
  }
  const userSchema = new mongoose.Schema({
   firstName:String,
   lastName:String,
   email:String,
   password:String
  });
  const User = mongoose.model('User',userSchema);




const server = express();
server.use(cors());
server.use(bodyParser.json());
server.post('/signup',async (req,res)=>{
    let user= new User();
    user.firstName=req.body.firstname
    user.lastName=req.body.lastname
    user.email=req.body.email
    user.password=req.password
  const doc= await  user.save()
   console.log(doc)
    res.json(doc);
})

server.listen(8080,()=>{
    console.log('server started')
})

