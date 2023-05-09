import { useState } from "react";
import Body from "./components/body";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [smallDisplayValue, setSmallDisplayValue] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const [calculations, setCalculations] = useState({
    value1: "0",
    operand: "",
    value2: "",
    result: "",
  });

  const clear = () => {
    setIsResult(false);
    setCalculations({
      value1: "0",
      operand: "",
      value2: "",
      result: "",
    });
  };

  const equal = () => {

    if (calculations.operand === "+") {
      setCalculations((prevState) => ({
        ...prevState,
        result: calculations.value1 + calculations.value2,
      }));
    }
    if (calculations.operand === "-") {
      setCalculations((prevState) => ({
        ...prevState,
        result: calculations.value1 - calculations.value2,
      }));
    }
    if (calculations.operand === "x") {
      setCalculations((prevState) => ({
        ...prevState,
        result: calculations.value1 * calculations.value2,
      }));
    }
    if (calculations.operand === "÷") {
      setCalculations((prevState) => ({
        ...prevState,
        result: calculations.value1 / calculations.value2,
      }));
    }
  };

  const handleButtonClicked = ({ target: { textContent } }) => {
    if (
      calculations.value1 &&
      calculations.operand &&
      calculations.value2 &&
      textContent === "="
    ) {
      setIsResult(true);
      equal();
      setCalculations((prevState) => ({
        ...prevState,
        operand: "",
      }));
    } else if (calculations.result && !isNaN(parseInt(textContent))) {
      clear();
      setCalculations((prevState) => ({
        ...prevState,
        value1: parseInt(prevState.value1 + textContent),
      }));
    } else if (
      calculations.result &&
      (textContent === "+" ||
        textContent === "-" ||
        textContent === "x" ||
        textContent === "÷")
    ) {
      setIsResult(false);
      setCalculations((prevState) => ({
        ...prevState,
        value1: prevState.result,
        operand: textContent,
        value2: "",
        result: "",
      }));
    } else if (
      calculations.value1 &&
      calculations.operand &&
      calculations.value2 &&
      (textContent === "+" ||
        textContent === "-" ||
        textContent === "x" ||
        textContent === "÷")
    ) {
      setIsResult(false);
      equal()
      // console.log('calculations')
      setCalculations((prevState) => ({
        ...prevState,
        value1: prevState.result,
        operand: textContent,
        value2: "",
        result: "",
      }));
    } else if (
      calculations.value1 &&
      (textContent === "+" ||
        textContent === "-" ||
        textContent === "x" ||
        textContent === "÷")
    ) {
      setCalculations((prevState) => ({
        ...prevState,
        operand: textContent,
      }));
    } else if (calculations.operand && !isNaN(parseInt(textContent))) {
      setCalculations((prevState) => ({
        ...prevState,
        value2: parseInt(prevState.value2 + textContent),
      }));
    } else if (!isNaN(parseInt(textContent))) {
      setCalculations((prevState) => ({
        ...prevState,
        value1: parseInt(prevState.value1 + textContent),
      }));
    }
    if (textContent === "clear") {
      clear();
    }
    console.log(calculations);
  };

  return (
    <Body>
      <Screen
        displayButtons={
          isResult
            ? calculations.result
            : calculations.value2
            ? calculations.value2
            : calculations.value1
        }
      />
      <Buttons buttonClicked={handleButtonClicked} />
    </Body>
  );
}

export default App;
