const express = require("express")
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");
app.use(express.json());

app.use("/user", require("./routes/UserRoute"));

//la connection ala base de données et création automatique du base "TestPFE"
mongoose.connect("mongodb://localhost:27017/TestPFE")
    .then(()=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error);
    })

app.listen(PORT, ()=>{
    console.log(`you are connected on ${PORT}`);
})