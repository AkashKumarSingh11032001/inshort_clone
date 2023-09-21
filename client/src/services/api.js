import axios from "axios";

export const getNews = async () => {
  const URl = "";
  try {
    return await axios.get();
  } catch (err) {
    console.log(err);
  }
};
