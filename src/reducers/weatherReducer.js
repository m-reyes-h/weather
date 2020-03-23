import {formatWeather} from '../utils';
export const ADD_WEATHER = "ADD_WEATHER";

export function addWeather(data) {
  return {
    type: ADD_WEATHER,
    data: formatWeather(data)
  }
}

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_WEATHER:
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}