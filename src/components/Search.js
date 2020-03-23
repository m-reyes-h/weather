import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import convert from "xml-js";
import { WeatherContext } from "../contexts/WeatherContext";
import { addWeather } from "../reducers/weatherReducer";
import { API } from "../utils";

const FormSt = styled.form`
  position: relative;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 3ch;
    height: 3px;
    background-color: ${props => props.theme.textColor};
    border-radius: 10rem;
  }
`;

const InputSt = styled.input`
  border: 1px solid transparent;
  border-bottom-color: ${props => props.theme.borderColor};
  padding: 0 1rem 0.5rem 0;
  width: 50%;
  color: ${props => props.theme.textColor};
  font-size: 2rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;

  :active,
  :focus {
    outline: none;
  }
`;

const Search = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(WeatherContext);

  // Get weather information on form submit
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather/?q=${text}&appid=${API}&units=metric&mode=xml`
      )
      .then(function(response) {
        console.log(response);
        return convert.xml2json(response.data, { compact: true });
      })
      .then(function(json) {
        const weather = JSON.parse(json).current;
        dispatch(addWeather(weather));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <FormSt onSubmit={handleSubmit}>
      <InputSt
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </FormSt>
  );
};

export default Search;
