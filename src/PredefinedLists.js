import React, { useState } from "react";
import styled from "styled-components";

const PredefinedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 20px;
`;
const Item = styled.div`
  cursor: pointer;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin: 10px;
  font-family: "Handlee", cursive;
  font-size: 24px;
  width: 100px;
  height: 40px;
`;
const ListItem = styled(Item)`
  background-color: #795548;
  &:hover {
    background-color: #bcaaa4;
    transition: background-color 0.5s ease-in-out;
  }
  ${({ active }) => active && "background: #bcaaa4"};
`;

const ResetButton = styled(Item)`
  cursor: ${({ available }) => (available ? "pointer" : "not-allowed")};
  background-color: #795548;
  opacity: ${({ available }) => (available ? 1 : 0.6)};
  &:hover {
    ${({ available }) =>
      available &&
      `
        background-color: #bcaaa4;
        transition: background-color 0.5s ease-in-out;
      `}
  }
`;

const PredefinedLists = ({ setNames }) => {
  const [activeList, setActiveItem] = useState("");
  const predefinedLists = JSON.parse(
    window.localStorage.getItem("predefinedLists")
  );
  const keys = Object.keys(predefinedLists);

  const handleClick = (item) => {
    setNames(predefinedLists[item]);
    setActiveItem(item);
  };

  const handleReset = () => {
    setNames([]);
    setActiveItem("");
  };

  return (
    <PredefinedList>
      {keys.map((list) => (
        <ListItem
          active={list === activeList}
          onClick={() => handleClick(list)}
        >
          {list}
        </ListItem>
      ))}
      <ResetButton available={activeList !== ""} onClick={() => handleReset()}>
        reset
      </ResetButton>
    </PredefinedList>
  );
};

export default PredefinedLists;
