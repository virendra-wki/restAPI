const mongoose=require("mongoose");
uri="mongodb+srv://thevirendrapal:16embec043@virendraapi.shgehi8.mongodb.net/VirendraApi?retryWrites=true&w=majority";
const connectDB= ()=>{
    console.log("connect db");
return mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
}
module.exports=connectDB;