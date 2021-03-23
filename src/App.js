import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "./List";
import Match from "./Match";
import Icon from "./assets/coffee_maker-24px.svg";

const Body = styled.div`
  width: 960px;
  margin: 0 auto;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;
const Title = styled.h2`
  cursor: pointer;
  position: relative;
  font-family: "Handlee", cursive;
  font-size: 34px;
  margin: 0;
  width: 200px;
`;

const Text = styled.span`
  &:hover {
    text-decoration: underline;
  }
  line-height: 1;
  position: absolute;
  bottom: 15px;
  right: 0;
`;
function App() {
  const [names, setNames] = useState([]);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    let list = [];
    let name = "";
    if (urlParams.get("list")) {
      const givenList = urlParams.get("list");
      list = givenList.split(",");
      if (urlParams.get("name")) {
        name = urlParams.get("name");
        const testObject = {};
        testObject[name] = list;
        window.localStorage.setItem(
          "predefinedLists",
          JSON.stringify(testObject)
        );
      }
    }
    if (window.localStorage.getItem("predefinedLists")) {
      const predefinedLists = JSON.parse(
        window.localStorage.getItem("predefinedLists")
      );
      const keys = Object.keys(predefinedLists);
      const firstItem = keys[0];
      const predefinedNames = predefinedLists[firstItem];
      setNames(predefinedNames);
    } else {
      setNames(list);
    }
  }, []);

  const removeName = (deletedName) => {
    setNames(names.filter((name) => name !== deletedName));
  };

  const addName = (name) => {
    if (!name) {
      return;
    }
    if (name.includes(",")) {
      const multipleNames = name.split(",");
      setNames([...names.concat(multipleNames)]);
    } else {
      setNames([...names, name]);
    }
  };

  const resetUrl = () => {
    return window.location.href.includes("localhost")
      ? "http://localhost:3000/"
      : "https://wing-cheung.github.io/mixNmatch/";
  };

  return (
    <Body>
      <TitleRow>
        <Title onClick={() => (window.location.href = resetUrl())}>
          <img src={Icon} width="50" alt="coffee machine logo" />
          <Text>mix & match</Text>
        </Title>
      </TitleRow>

      {showMatch ? (
        <Match names={names} />
      ) : (
        <List
          removeName={removeName}
          names={names}
          setShowMatch={setShowMatch}
          addName={addName}
        />
      )}
    </Body>
  );
}

export default App;
