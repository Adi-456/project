const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv=require("dotenv")
const cardDataRouter=require("./routers/cardDataRouter");

dotenv.config();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  
app.use(cors());
app.get('/Ebartr',(req,res)=>{
    res.send("Hello World");
}
)
app.use(express.json());
app.use('/Ebartr/cards',cardDataRouter);

