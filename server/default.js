import { data } from "./constants/data.js";
import News from "./model/news-schema.js";

const DefaultData = async () => {
  try {
    // validate data object using News Schema and after validation insert it into database.
    
    // await News.deleteMany({}); delete all data in database
    await News.insertMany(data);
    console.log("Data imported Successfully!")
  } catch (error) {
    console.log("Error ", error.message);
  }
};

export default DefaultData;
