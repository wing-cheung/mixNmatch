import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Machine2 from "./assets/machine-2.png";

const MachineWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const MachineMessage = styled.div`
  color: #d7ccc8;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 20%;
  font-size: 20px;
  width: 60%;
  @media (min-width: 768px) {
    top: 13%;
    left: 30%;
    font-size: 24px;
    width: 60%;
  }
`;

const MachineCounter = styled.div`
  color: #d7ccc8;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  top: 37%;
  left: 45%;
  @media (min-width: 768px) {
    top: 39%;
    left: 48%;
    font-size: 72px;
  }
`;

const Countdown = ({ renderIfFinished }) => {
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);
  return counter === 0 ? (
    renderIfFinished()
  ) : (
    <MachineWrapper>
      <img src={Machine2} width="600" />
      <MachineMessage>
        One moment please, <br></br>
        coffee partner is being selected...
      </MachineMessage>
      <MachineCounter id="countdown">{counter}</MachineCounter>
    </MachineWrapper>
  );
};

export default Countdown;
