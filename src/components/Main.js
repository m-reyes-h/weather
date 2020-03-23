import React, { useContext } from "react";
import { ReactComponent as Umbrella } from "../assests/umbrella.svg";
import styled, { keyframes } from "styled-components";
import { WeatherContext } from "../contexts/WeatherContext";

const MainSt = styled.div`
  color: ${props => props.theme.textColor};
  font-weight: 400;
  position: relative;
  overflow-x: hidden;
  max-height: 90vh;
  height: 80vh;
  color: ${props => props.theme.textDarkColor};
`;

const TitleSt = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 5.5rem;
  font-weight: 700;
  color: ${props => props.theme.textColor};
  margin-top: 3rem;

  sup {
    font-size: 3rem;
    font-weight: 600;
  }

  sup + sup {
    font-size: 2rem;
    vertical-align: text-top;
    line-height: 2;
  }
`;

const MaxLow = styled.p`
  text-transform: uppercase;
  margin-top: 2rem;

  span {
    padding-right: 0.5rem;
    letter-spacing: -0.1px;
  }
`;

const DescriptionSt = styled.p`
  margin-top: -20px;
  margin-bottom: 3rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const CapitalizeSt = styled.span`
  display: inline-block;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const InfoSt = styled.div`
  margin-top: 3rem;
`;

const pulse = keyframes`
  0% {
    transform: scale(0.7);
    opacity: .75;
	}

	40% {
    transform: scale(1.5);
    opacity: .5
  }

  80% {
    transform: scale(1.2);
    opacity: .2
  }

	100% {
    transform: scale(0.7);
    opacity: 0;
	}
`;


const pulseKeep = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
	}

	50% {
    transform: scale(1.5);
    opacity: 0.95;
  }

	100% {
    transform: scale(0.95);
    opacity: 0;
	}
`;

const rotate = keyframes`
  0% {
    transform: scale(0.95);
    transform: rotate(5deg);
	}

  50% {
    transform: scale(1.2);
    transform: rotate(0deg);
  }

	100% {
    transform: scale(0.95);
    transform: rotate(5deg);
	}
`;

const rotateFull = keyframes`
  0% {
    transform: rotate(0deg);
	}

	100% {
    transform: rotate(360deg);
	}
`;

const rotateInverse = keyframes`
  0% {
    transform: rotate(-360deg);
	}

	100% {
    transform: rotate(0deg);
	}
`;

const shrink = keyframes`
  0% {
    transform: scale(0.95);
	}

  50% {
    transform: scale(0.55);
  }

  100% {
    transform: scale(0.95);
  }
`;

const moveUp = keyframes`
  0% {
    transform: translateY(0);
	}

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
	}

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(0);
  }
`;

const opaque = keyframes`
  0% {
    opacity: 1;
	}

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
  }
`;



// Sun
const SunSt = styled.div`
  background-image: url(${require("../assests/sun/sunInner.svg")});
  background-position: left;
  background-size: cover;
  height: 350px;
  width: 350px;
  position: absolute;
  top: 3rem;
  right: -10rem;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    background-position: left;
    background-size: cover;
    background-image: url(${require("../assests/sun/sunOuter.svg")});
    height: 350px;
    width: 350px;
    animation: ${pulse} 7s infinite;
  }
`;

//Mist;
const MistSt = styled.div`
  background-image: url(${require("../assests/fog/foga.svg")});
  background-position: left;
  background-size: cover;
  height: 350px;
  width: 350px;
  top: 3rem;
  position: absolute;
  right: -10rem;
  animation: ${rotate} 25s infinite;

  :before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: cover;
    background-image: url(${require("../assests/fog/fogb.svg")});
    animation: ${rotateFull} 60s infinite;
  }

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    background-position: left;
    background-size: cover;
    background-image: url(${require("../assests/fog/fogc.svg")});
    height: 350px;
    width: 350px;
    animation: ${rotateFull} 45s linear infinite, ${shrink} 20s infinite;
  }
`;

// Snow
const SnowSt = styled.div`
  background-image: url(${require("../assests/snow/inner.svg")});
  background-position: left;
  background-size: cover;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -10rem;
  position: absolute;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: cover;
    background-image: url(${require("../assests/snow/outer.svg")});
    animation: ${shrink} 5s infinite;
    transform-origin: center;
  }

  :before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: cover;
    background-image: url(${require("../assests/snow/star.svg")});
    animation: ${pulse} 4.5s infinite;
  }
`;

//Thunder
const ThunderSt = styled.div`
  background-image: url(${require("../assests/thunder/thunder.svg")});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -15rem;
  position: absolute;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/thunder/out.svg")});
    animation: ${shrink} 5s infinite;
    transform-origin: center;
  }

  :before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/thunder/inner.svg")});
    animation: ${pulse} 4.5s infinite;
  }
`;

//Clouds
const CloudSt = styled.div`
  background-image: url(${require("../assests/clouds/cloud.svg")});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -10rem;
  position: absolute;
  animation: ${rotate} 4.5s infinite;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 47px;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/clouds/out.svg")});
    animation: ${moveUp} 5s infinite, ${moveLeft} 4.5s infinite;
  }

  :before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: -15px;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/clouds/inner.svg")});
    animation: ${moveLeft} 4.5s infinite, ${moveUp} 5.5s infinite;
  }
`;

// Rain
const RainSt = styled.div`
  background-image: url(${require("../assests/rain/rain.svg")});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -7rem;
  position: absolute;
  animation: ${opaque} 4s infinite;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: -47px;
    right: 0px;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/rain/out.svg")});
    animation: ${opaque} 1.5s ease-in-out infinite;
  }
`;

// Broken
const BrokenSt = styled.div`
  background-image: url(${require("../assests/broken/broken.svg")});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -10rem;
  position: absolute;
  opacity: .7;
  animation: ${rotate} 4.5s infinite;

  :after {
    content: " ";
    display: inline-block;
    position: absolute;
    top: 47px;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/broken/out.svg")});
    animation: ${moveUp} 5s infinite, ${moveLeft} 4.5s infinite;
  }

  :before {
    content: " ";
    display: inline-block;
    position: absolute;
    top: -15px;
    right: 0;
    height: 350px;
    width: 350px;
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${require("../assests/broken/inner.svg")});
    animation: ${moveLeft} 4.5s infinite, ${moveUp} 5.5s infinite;
  }
`;

// moon
const MoonSt = styled.div`
  background-image: url(${require("../assests/moon/moon.svg")});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  top: 3rem;
  right: -10rem;
  position: absolute;
  opacity: 0.7;
  animation: ${rotate} 4.5s infinite;
`;

const IconSt = styled.i`
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const Main = () => {
  const { weather } = useContext(WeatherContext);
  const formatIcon = (icon) => {
    switch (icon) {
      case "01d":
        return <SunSt></SunSt>;

      case "01n":
        return <MoonSt></MoonSt>;

      case "02d":
      case "02n":
      case "03d":
      case"03n":
        return <CloudSt></CloudSt>;

      case "04d":
      case "04n":
        return <BrokenSt></BrokenSt>;

      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <RainSt></RainSt>;

      case "11d":
      case "11n":
        return <ThunderSt></ThunderSt>;

      case "13d":
      case "13n":
        return <SnowSt></SnowSt>;

      case "50d":
      case "50n":
        return <MistSt></MistSt>;

      default:
        return <SunSt></SunSt>;
    }
  }
  return (
    <MainSt>
      {/* Animated Weather Icon */}
      {(weather?.weather?.icon && formatIcon(weather.weather.icon)) || <SunSt></SunSt> }

      {/* Max & Low Temp */}
      <MaxLow>
        <span>H {weather?.temperature?.max || 94}&deg;</span>
        <span>L {weather?.temperature?.min || 70} &deg;</span>
      </MaxLow>

      {/* Current Temp */}
      <TitleSt>
        {weather?.temperature?.value || 21}
        <sup>&deg;</sup>
        <sup>C</sup>
      </TitleSt>

      {/* Weather Description */}
      <DescriptionSt>{weather?.weather?.value || "Sunny"}</DescriptionSt>

      {/* Precipitation & more */}
      <div>
        <IconSt>
          <Umbrella />
        </IconSt>
        <span>{weather?.precipitation?.mode || 0}%</span>
      </div>

      <InfoSt>
        <p>
          <CapitalizeSt>{weather?.clouds?.name || "Clear"}</CapitalizeSt>, Low{" "}
          {weather?.temperature?.min || 20}&deg;{"."}
        </p>
        <p>
          <CapitalizeSt>{weather?.wind?.speed?.name || "Clear"}</CapitalizeSt>{" "}
          <strong>{weather?.wind?.direction?.code || "ENE"}</strong> at{" "}
          <span>{weather?.wind?.speed?.value || "10 t0 15"}</span>{" "}
          <span>{weather?.wind?.speed?.unit || "km/h"}</span>
          {"."}
        </p>
      </InfoSt>
    </MainSt>
  );
};

export default Main;
