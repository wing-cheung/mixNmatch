import React from "react";
import styled from "styled-components";
import useSound from "use-sound";
import drum2 from "./sounds/drum2.mp3";
import coffeemaker from "./sounds/coffee-maker.mp3";
import Match2 from "./assets/match-2.png";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 790px;
`;

const NameWrapper = styled.div`
  position: relative;
  transform: rotate(2deg);

  &: nth-child(even) {
    transform: rotate(8deg);
  }

  &: nth-child(3n) {
    transform: rotate(-3deg);
  }
  &: nth-child(6n) {
    transform: rotate(5deg);
  }
  &:hover {
    transform: rotate(0);
    > div.delete {
      visibility: visible;
    }
  }
`;

const NameItem = styled.div`
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin: 10px;
  font-family: "Handlee", cursive;
  font-size: 24px;
  width: 100px;
  height: 100px;
  background: #bcaaa4;
`;

const AddNameItem = styled(NameItem)`
  cursor: pointer;
  font-size: 48px;
  &:hover {
    font-size: 76px;
    transform: font-size 3s ease-in;
  }
`;

const Controls = styled.div`
  position: absolute;
  visibility: hidden;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;

const StartMatching = styled.img`
  display: flex;
  margin-top: -40px;
  margin-right: -100px;
  margin-left: auto;
  cursor: pointer;
  z-index: 2;
  &:hover {
    transform: rotate(10deg);
  }
`;

const List = ({ removeName, names, setShowMatch, addName }) => {
  const [play] = useSound(coffeemaker);
  const handleClick = () => {
    setTimeout(play(), 2000);
    setShowMatch(true);
  };

  return (
    <ListWrapper>
      {names.map((name, index) => (
        <NameWrapper>
          <NameItem key={index}>{name}</NameItem>
          <Controls className="delete" onClick={() => removeName(name)}>
            ⓧ
          </Controls>
        </NameWrapper>
      ))}
      <AddNameItem onClick={() => addName(prompt("Add name:"))}>+</AddNameItem>
      {names.length > 1 && (
        <StartMatching
          title="click me"
          alt="mix & match"
          src={Match2}
          width="300"
          onClick={handleClick}
        />
      )}
    </ListWrapper>
  );
};

export default List;
