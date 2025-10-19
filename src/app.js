const express = require('express');
const connectDB=require("./config/database");
const app=express();
const User=require("./models/user");
const {validateSignUpData} =require("./utils/validation");
const jwt=require("jesonwebtoken");

app.use(express.json());
app.use(cookieParser());

// erro
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

