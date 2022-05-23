import React, { useState } from "react";
import "./App.css";
import News from "./News/News";
import "@dracula/dracula-ui/styles/dracula-ui.css";
import { Heading, Box, Divider, Select } from "@dracula/dracula-ui";

function App() {
  const [about, setAbout] = useState("Anime");
  const [language, setLanguage] = useState("en");

  const colors = ["cyan", "green", "orange", "pink", "purple", "red", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleAboutChange = (value) => {
    setAbout(value);
    console.log(about);
  };
  const handleLanguageChange = (value) => {
    setLanguage(value);
    console.log(about);
  };

  return (
    <div className="App">
      <Box color="black" height="full" width="full">
        <Box color="black" display="inline-block" width="full">
          <Divider color={randomColor} />
          <Divider color={randomColor} />

          <div className="navbar__container">
            <Heading size="2xl" color="cyanGreen">
              {about} News
            </Heading>

            <div>
              <Select
                onChange={(e) => {
                  handleAboutChange(e.target.value);
                }}
                defaultValue="default"
                variant="normal"
                color={randomColor}
              >
                <option value="default" disabled={true}>
                  Other News
                </option>
                <option>Anime</option>
                <option>Nintendo</option>
                <option>Playstation</option>
                <option>Xbox</option>
                <option>Crypto</option>
              </Select>
              <Select
                onChange={(e) => {
                  handleLanguageChange(e.target.value);
                }}
                defaultValue="default"
                variant="normal"
                color={randomColor}
              >
                <option value="default" disabled={true}>
                  Language
                </option>
                <option>en</option>
                <option>es</option>
                <option>fr</option>
              </Select>
            </div>
          </div>
          <Divider color={randomColor} />
          <Divider color={randomColor} />
        </Box>
        <News color={randomColor} about={about} language={language} />
      </Box>
    </div>
  );
}

export default App;
