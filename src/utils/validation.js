const validator=require("validator");
const validateSignUpData=(re)=>{

};

const validateEditProfileData=(req)=>{
    const allowedEditFeilds={
        "firstName",
        "lastName",
        "emailId",
        "password"
    }=req.body;

    if(!firstName||!latsName){
        throw new Error("name is not valid");

    }
    else if(firstName.Length<4||firstName>50){
        throw new Error("firstName shold be ")
    }
    
=}

module.export=validate