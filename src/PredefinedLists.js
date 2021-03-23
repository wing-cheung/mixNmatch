import React, { useState } from "react";
import styled from "styled-components";

const PredefinedList = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;

const ListWrapper = styled.div`
  position: relative;
  &:hover {
    > div.delete {
      visibility: visible;
    }
  }
`;

const ListItem = styled.div`
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
  background-color: #795548;
  &:hover {
    background-color: #bcaaa4;
    transition: background-color 0.5s ease-in-out;
  }
  ${({ active }) => active && "background: #bcaaa4"};
`;

const Controls = styled.div`
  position: absolute;
  visibility: hidden;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;

const PredefinedLists = ({ setNames, removeList }) => {
  const [activeList, setActiveItem] = useState("");
  const predefinedLists = JSON.parse(
    window.localStorage.getItem("predefinedLists")
  );
  const keys = Object.keys(predefinedLists);

  const handleClick = (item) => {
    setNames(predefinedLists[item]);
    setActiveItem(item);
  };

  /* const handleReset = () => {
    setNames([]);
    setActiveItem("");
  }; */

  return (
    <PredefinedList>
      {keys.map((list) => (
        <ListWrapper>
          <ListItem
            active={list === activeList}
            onClick={() => handleClick(list)}
          >
            {list}
          </ListItem>
          <Controls className="delete" onClick={() => removeList(list)}>
            ⓧ
          </Controls>
        </ListWrapper>
      ))}
      {/* <ListItem onClick={() => handleReset()}>reset</ListItem> */}
    </PredefinedList>
  );
};

export default PredefinedLists;
