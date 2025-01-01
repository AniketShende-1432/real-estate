const express = require("express");
const app = express();
const cors =require("cors");
require("./conn/conn");
require('dotenv').config()
const auth = require("./routes/auth");
const prop = require("./routes/prop");
const search = require("./routes/search");

app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use('/uploads', express.static('uploads'));

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/api/v1", auth);
app.use("/api/v2", prop);
app.use("/api/v3", search);

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
});