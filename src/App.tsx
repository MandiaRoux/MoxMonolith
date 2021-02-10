import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./theme";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Loader } from "./components/Basic";

const GlobalStyle = createGlobalStyle`  body {
    margin: 0;
    padding: 0;
  background: ${Colors.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }`;

function App() {
  const [cardData, setCardData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = (url) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setCardData(myJson.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData("https://api.scryfall.com/cards/search?exact=kruphix");
  }, []);

  const handleSearch = () => {
    setLoading(true);
    getData(`https://api.scryfall.com/cards/search?q=${searchTerm}`);
  };

  console.log(">>>state>", cardData);

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <>
          {cardData && (
            <>
              {" "}
              {cardData.map((card) => {
                return <Card card={card} />;
              })}
            </>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
