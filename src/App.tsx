import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import {SearchForm} from "./components/Search/SearchForm";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <div className="App">
      <Header />

      <SearchForm />
    </div>
  );
};

export default App;
