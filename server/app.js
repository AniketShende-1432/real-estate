const express = require("express");
const app = express();
const cors =require("cors");
require("./conn/conn");
require('dotenv').config()
const auth = require("./routes/auth");

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/api/v1", auth);

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
});