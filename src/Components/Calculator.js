import React, { useState } from "react";
import { Container, Screen, Prev, Current, Button } from "../styles/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");
  const handleButtonClick = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const allClearHandler = () => {
    setCurrent("");
    setPrevious("");
    setOperations("");
  };

  const chooseOperationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(e.target.getAttribute("data"));
  };

  const compute = () => {
    let result;
    let prevNumber = parseFloat(previous);
    let currNumber = parseFloat(current);
    if (isNaN(prevNumber) || isNaN(currNumber)) return;
    switch (operations) {
      case "÷":
        result = prevNumber / currNumber;
        break;
      case "x":
        result = prevNumber * currNumber;
        break;
      case "+":
        result = prevNumber + currNumber;
        break;
      case "-":
        result = prevNumber - currNumber;
        break;

      default:
        return;
    }
    return result;
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };
  return (
    <Container>
      <Screen>
        <Prev>
          {previous} {operations}
        </Prev>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={allClearHandler} gridSpan={2} control>
        AC
      </Button>
      <Button onClick={deleteHandler}>DEL</Button>
      <Button onClick={chooseOperationHandler} data={"÷"} operation>
        ÷
      </Button>
      <Button data={7} onClick={handleButtonClick}>
        7
      </Button>
      <Button data={8} onClick={handleButtonClick}>
        8
      </Button>
      <Button data={9} onClick={handleButtonClick}>
        9
      </Button>
      <Button onClick={chooseOperationHandler} data={"x"} operation>
        x
      </Button>
      <Button data={4} onClick={handleButtonClick}>
        4
      </Button>
      <Button data={5} onClick={handleButtonClick}>
        5
      </Button>
      <Button data={6} onClick={handleButtonClick}>
        6
      </Button>
      <Button onClick={chooseOperationHandler} data={"+"} operation>
        +
      </Button>
      <Button data={1} onClick={handleButtonClick}>
        1
      </Button>
      <Button data={2} onClick={handleButtonClick}>
        2
      </Button>
      <Button data={3} onClick={handleButtonClick}>
        3
      </Button>
      <Button onClick={chooseOperationHandler} data={"-"} operation>
        -
      </Button>
      <Button data={"."} onClick={handleButtonClick} decimal>
        .
      </Button>
      <Button data={0} onClick={handleButtonClick}>
        0
      </Button>
      <Button onClick={equalHandler} gridSpan={2} equals>
        =
      </Button>
    </Container>
  );
};

export default Calculator;
