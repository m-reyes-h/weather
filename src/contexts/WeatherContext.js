import React, { useReducer, createContext } from "react";
import { weatherReducer } from "../reducers/weatherReducer";

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
export const WeatherContext = createContext();

// A Context Provider to be used in App component
// this wrap all the children that consume it
const WeatherContextProvider = props => {
  const [weather, dispatch] = useReducer(weatherReducer, {});

  return (
    <WeatherContext.Provider value={{ weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
