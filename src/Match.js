import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Mug1 from "./assets/coffee-1.png";
import Mug2 from "./assets/coffee-2.png";

import Countdown from "./Countdown";

const MugImages = [Mug1, Mug2];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const CoffeeMug = styled.div`
  position: relative;
  width: 200px;
`;

const MatchItem = styled.div`
  position: absolute;
  font-size: 26px;
  font-weight: bold;
  left: ${({ left }) => left && "22%"};
  right: ${({ right }) => right && "22%"};
  top: ${({ top }) => (top ? top : "50%")};
  font-family: "Handlee", cursive;
  text-shadow: 2px 2px 4px #aaa;

  &: nth-child(even) {
    transform: rotate(8deg);
  }

  &: nth-child(3n) {
    transform: rotate(-6deg);
  }
  &: nth-child(6n) {
    transform: rotate(10deg);
  }
`;

const GROUPSIZE = 2;

const matcher = (names, additionalName = null) => {
  const finalMatches = [];

  [...Array(names.length / GROUPSIZE)].forEach(() => {
    let matchedNames = [];
    [...Array(GROUPSIZE)].forEach(() => {
      const randomName = names[[Math.floor(Math.random() * names.length)]];
      names.splice(names.indexOf(randomName), 1);
      matchedNames.push(randomName);
    });
    finalMatches.push(matchedNames);
  });
  if (additionalName) {
    finalMatches[finalMatches.length - 1].push(additionalName);
  }
  return finalMatches;
};

const matcherCall = (names) => {
  const moduloNames = names.length % GROUPSIZE;
  if (moduloNames === 0) {
    return matcher(names);
  } else {
    const additionalName = names[[Math.floor(Math.random() * names.length)]];
    names.splice(names.indexOf(additionalName), 1);
    return matcher(names, additionalName);
  }
};

const Match = ({ names }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    setMatches(matcherCall(names));
  }, []);

  return (
    <Countdown
      renderIfFinished={() => (
        <Wrapper>
          {matches.map((match) => {
            return (
              <CoffeeMug>
                <img
                  src={
                    MugImages[[Math.floor(Math.random() * MugImages.length)]]
                  }
                  width="200"
                />
                <MatchItem right>{match[0]}</MatchItem>
                <MatchItem left top="60%">
                  {match[1]}
                </MatchItem>
                {match[2] && (
                  <MatchItem left top="30%">
                    {match[2]}
                  </MatchItem>
                )}
              </CoffeeMug>
            );
          })}
        </Wrapper>
      )}
    />
  );
};

export default Match;
