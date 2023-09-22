import axios from "axios";

export const getNews = async () => {
  const URl = "https://localhost:8000";
  try {
    return await axios.get(`${URL}/news`);
  } catch (err) {
    console.log(err);
  }
};
