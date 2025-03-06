const mongoose=require("mongoose")

const userSchems= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    pages:{
        type:Array,
        require:true
    },
    author:{
        type:String,
        require:true
    },
})
const user =mongoose.model("users",userSchems)
module.exports=user