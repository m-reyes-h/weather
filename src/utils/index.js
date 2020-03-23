export const API = "aa8e5ed191998995dda66b61604613dd";

export function formatWeather(data) {
  const temp = data.temperature._attributes;
  const weat = data.weather._attributes;
  const prec = data.precipitation._attributes;
  const clou = data.clouds._attributes;
  const windSpeed = data.wind.speed._attributes;
  const windDir = data.wind.direction._attributes;

  return {
    temperature: {
      value: Number(temp.value).toFixed(0),
      min: Number(temp.min).toFixed(0),
      max: Number(temp.max).toFixed(0),
      unit: temp.unit
    },
    weather: {
      icon: weat.icon,
      value: weat.value
    },
    precipitation: {
      mode: prec.mode === "no" ? 0 : prec.mode
    },
    clouds: {
      name: clou.name
    },
    wind: {
      speed: {
        name: windSpeed.name,
        value: Number(windSpeed.value).toFixed(0),
        unit: windSpeed.unit
      },
      direction : {
        code: windDir.code
      }
    }
  };
}
