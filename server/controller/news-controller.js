import news from "../model/news.js";

export const getNews = async (request, response) => {
  try {
    let data = await news.find({});
    response.status(200).json(data);
  } catch (err) {
    response.status(500).json({ message: data.message });
  }
};
