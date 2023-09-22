import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://akashkumarsingh11032001:iLkXALnppwcOXAOR@cluster0.lutgzyg.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected Successfully!");
  } catch (err) {
    console.log(`Error while connecting with the database`, err);
  }
};

export default Connection;
