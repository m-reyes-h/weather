import React from "react";
import "./App.css";
import Cities from "./components/Cities";
import Content from "./components/Content";
import WeatherContextProvider from './contexts/WeatherContext';

function App() {
  return (
    <WeatherContextProvider>
      <Content />
      {/* <Cities /> */}
    </WeatherContextProvider>
  );
}

export default App;
