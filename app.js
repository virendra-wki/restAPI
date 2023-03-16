const express=require("express");
require("dotenv").config();
const app=express();
const connectDB=require("./db/connect");
const PORT=process.env.PORT||5000;
const product_routes=require("./routes/products.js");
app.get("/",(req,res)=>{
    res.send("Hello I am Live");

})

app.use("/api/products",product_routes);
const start= async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I am Connected`);
        })
    } catch (error) {
       console.log(error); 
    }
}
start();