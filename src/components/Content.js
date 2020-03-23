import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Main from "./Main";

const CardSt = styled.div`
  height: 90vh;
  width: 411px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 1.7px 5.2px rgba(0, 0, 0, 0.028),
    0 5.6px 17.6px rgba(0, 0, 0, 0.042), 0 25px 80px rgba(0, 0, 0, 0.07);
  padding: 1rem 0 1rem 1rem;
`;

const Content = () => {
  return (
    <CardSt>
      <Search />
      <Main />
    </CardSt>
  );
};

export default Content;
