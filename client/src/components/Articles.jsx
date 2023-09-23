import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    // console.log(response.data);
    setNews(response.data);
  };
  return (
    <Box>
      {news.map((data) => (
        <ArticlesCard article={data}/>
      ))}
    </Box>
  );
};

export default Articles;
