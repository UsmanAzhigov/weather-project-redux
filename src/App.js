import React from "react";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import WeatherInCity from "./pages/WeatherInCity/WeatherInCity";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/city/:cityName/:degree/:typeWeather"
          element={<WeatherInCity />}
        />
      </Routes>
    </div>
  );
}

export default App;
