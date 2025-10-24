const mongoose=require("mongose");

const connectionRequestSchema=new mongoose.Schema({
    fromUserId:{
        type: mongoose.Schema.types.ObjectId,
        required:true
    },
    toUserId:{
        type:mongoose.Schema>types.ObjectId,
        required :true
    },
    status:{
        type:string,
        enum:{
            values:{ "ignore","interested","accepted","rejected"},
            message:{value} is incoorect status type ;,
        },
    },
})