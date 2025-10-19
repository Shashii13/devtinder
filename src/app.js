const express = require('express');
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user");
const {validateSignUpData} =require("./utils/validation");
const jwt=require("jesonwebtoken");

app.use(express.json());
app.use(cookieParser());

// error in this get becuase get api not get from body 
app.get("/profile",async (req,res)=>{
    try{
        const cookies=req.cookies;
    const{token}=cookies;

    if(!token){
        throw new error("invalifd token");

    }

    const decodedMessage=await jwt.verify(token,"DEV@token790");
    console.log("decoded message");
    const {_id}=deCodedMessage;
    console.log("loged in user is:"+_id)

    const user=await User.findById(_id);
    if(!user){
        throw new error("user not exist");
    }
    console.log(user);
    res.send("reading cookies")
    }catch(err){
        res.status(400).send("something went wrong");

    }
})
app.get("/user",async (req,res)=>{
    const userEmail=req.body.emailId;
    
    try{
        const user = await User.find({ emailId: userEmail });
        res.send(user);

    } catch(err){
        res.status(400).send("something went wrong");

    }
})
app.get("/feed",async (req,res)=>{
  try{
 const user = await User.find({});
 res.send(user);
  }catch(err){
        res.status(400).send("something went wrong");

    }
})

//delete
app.delete("/user",async (req,res)=>{
    const userId= req.body.userId;
    try{
      const user= await User.findByIdAndDelete(userId);
      res.send("user dleeted succesfully");
    }catch(err){
        res.status(400).send("something went wrong");

    }
})

app.patch("/user", async (req, res) => {
    const { userId, ...data } = req.body;

    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "firstName", "lastName", "emailId", "password"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
        ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
        return res.status(400).send("Updates not allowed");
    }

    try {
        const user = await User.findByIdAndUpdate(userId, data, {
            new: true,          // return updated doc
            runValidators: true,
        });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send({
            message: "Updated successfully",
            user
        });
    } catch (err) {
        res.status(400).send("Something went wrong: " + err.message);
    }
});




connectDB()
.then(()=>{
    console.log("database connect");
    app.listen(3000,()=>{
    console.log("server is listening")
});
})
.catch((err)=>{
    console.log("not connected to database");
});

