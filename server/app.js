const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cors = require("cors");
const dotenv=require("dotenv")
const cardDataRouter=require("./routers/cardDataRouter");
const authenticateRouter=require("./routers/authenticate.js");

dotenv.config();
const port = 5000;
const url=process.env.MONGODB_URL
mongoose
  .connect(url, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is listening on port: ",port);
    });
  })
  .catch((err) => {
    console.log("Error Occurred");
  });


  
app.use(cors());
app.get('/Ebartr',(req,res)=>{
    res.send("Hello World");
}
)
app.use(express.json());
app.use('/Ebartr/cards',cardDataRouter);
app.use('/Ebartr/authenticate',authenticateRouter);

