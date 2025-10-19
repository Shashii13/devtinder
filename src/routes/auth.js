const express =require=('express');

const router=express.router();

router.post("/signup",async (req,res)=>{


    try{
        //valiadtre of data
        validateSignUpData(req);

        const{firstName,lastName,emailId, password}=req.body;

       //encrypt the data
       const passwordHash=await bcrypt.hash(password, 10);
       console.log(passwordHash);
       \//ceating a new instance of the user model
       const user=new User({
        firstNmae,
        lastName,
        emailId;
        paswword:passwordHash,
       });
       await user.save();
       res.send("user added succesfully");
    } 
        catch(err){
        res.status(400).send("error in saving data"+err.message);
    }

    
})