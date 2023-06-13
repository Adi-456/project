const express = require("express"); // Importing the Express framework
const mongoose = require("mongoose"); // Importing the Mongoose library
const cookieParser = require("cookie-parser"); // Importing the cookie-parser middleware
const dotenv = require("dotenv"); // Importing the dotenv library for environment variables
const cors = require("cors"); // Importing the cors library to handle cross-origin requests
const loginsingupController = require("./Controllers/loginSignupControllers");
const messageController = require("./Controllers/messageControllers");
const cardDataRouter=require("./routers/cardDataRouter");
dotenv.config(); // Loading environment variables from the .env file

// Connecting to the MongoDB database
mongoose
  .connect(process.env.MONGO_URL)
  .then((con) => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    throw err;
  });

const app = express(); // Creating an Express application
app.use("/uploads", express.static(__dirname + "/uploads")); // Serving static files from the "/uploads" directory
app.use(express.json()); // Parsing JSON requests
app.use(cookieParser()); // Parsing cookies
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
); // Configuring CORS options for cross-origin requests
app.get('/Ebartr',(req,res)=>{
  res.send("Hello World");
}
)
app.use('/Ebartr/cards',cardDataRouter);
// Route for testing the server
app.get("/test", (req, res) => {
  res.json("test ok");
});

// Route for fetching messages between two users
app.get("/messages/:userId", messageController.fetchAllMessages);

// Route for fetching all users
app.get("/people", messageController.getAllUsers);

// Route for fetching user profile
app.get("/profile", messageController.fetchUser);

// Route for user login
app.post("/login", loginsingupController.userLogin);

// Route for user logout
app.post("/logout", loginsingupController.userLogout); //resetting our cookie

// Route for user registration
app.post("/register", loginsingupController.regUser);
module.exports = app;
