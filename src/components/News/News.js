import React, { useState, useEffect } from "react";
import NewSingle from "./NewSingle";
import { Card, Box } from "@dracula/dracula-ui";

export default function News({ color, about, language }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // const url = ` https://gnews.io/api/v4/search?q=${about}&lang=${language}&sortBy=publishedAt&token=${process.env.REACT_APP_API_KEY}`;

    const url = `https://gnews.io/api/v4/search?q=${about}&lang=${language}&token=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => console.log(error));
  }, [about, language]);

  function renderItems() {
    return news.map((item) => (
      <Card
        key={item.url}
        variant="subtle"
        color={color}
        width="xl"
        height="lg"
      >
        <NewSingle item={item} />
      </Card>
    ));
  }

  return (
    <Box
      height="full"
      width="full"
      color="black"
      className="card-Box__display-flex"
    >
      {renderItems()}
    </Box>
  );
}
