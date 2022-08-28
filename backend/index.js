const mongoose=require("mongoose");
const express=require("express");
const app=express();
const cors=require("cors");

const userRoutes= require("./routes/user");

// DB 
mongoose
  .connect("mongodb://localhost:27017/exitexam",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  
  app.use('/api',userRoutes);

  const port=8080;

  app.listen(port, () => {
    console.log(`app is running at ${port}`);
  });