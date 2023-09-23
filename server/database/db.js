import mongoose from "mongoose";

const Connection = async () => {
  const URL = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URL, {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database connected Successfully!");
  } catch (err) {
    console.log(`Error while connecting with the database`, err);
  }
};

export default Connection;
