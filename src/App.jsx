import { useState } from "react";
// import Body from "./components/body";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import Githublogo from "./assets/githublogo";
import "./App.css";

function App() {
  const [smallDisplayValues, setSmallDisplayValues] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [calculations, setCalculations] = useState({
    value1: "0",
    operand: "",
    value2: "0",
    result: "",
  });

  const clear = () => {
    setIsResult(false);
    setSmallDisplayValues([]);
    setCalculations((prevState) => ({
      ...prevState,
      value1: "0",
      operand: "",
      value2: "0",
      result: "",
    }));
  };

  const updateCalculations = (newCalculations) => {
    setCalculations((prevState) => ({
      ...prevState,
      ...newCalculations,
    }));
  };

  const handleEqual = () => {
    const value1 = parseFloat(calculations.value1);
    const value2 = parseFloat(calculations.value2);

    switch (calculations.operand) {
      case "+":
        updateCalculations({
          result: value1 + value2,
        });
        return value1 + value2;
      case "-":
        updateCalculations({
          result: value1 - value2,
        });
        return value1 - value2;
      case "x":
        updateCalculations({
          result: value1 * value2,
        });
        return value1 * value2;
      case "÷":
        updateCalculations({
          result: value1 / value2,
        });
        return value1 / value2;
      default:
        break;
    }
  };

  const handleButtonClicked = ({ target: { textContent } }) => {
    if (
      calculations.value1 &&
      calculations.operand &&
      calculations.value2 &&
      textContent === "="
    ) {
      console.log(calculations.value2);
      setIsResult(true);
      setIsValue(false);
      setCalculations((prevState) => ({
        ...prevState,
        operand: "",
      }));
      if (calculations.value2 === "0") {
        setCalculations((prevState) => ({
          ...prevState,
          result: "Error: Divide by zero",
        }));
        setSmallDisplayValues([]);
      } else {
        handleEqual();
        setSmallDisplayValues([
          `${calculations.value1} ${calculations.operand} ${calculations.value2} =`,
        ]);
      }
    } else if (
      calculations.value1 &&
      calculations.value2 === "0" &&
      textContent === "ᐊ"
    ) {
      if (calculations.value1.length === 1) {
        setCalculations((prevState) => ({
          ...prevState,
          value1: "0",
        }));
      } else {
        setCalculations((prevState) => ({
          ...prevState,
          value1: prevState.value1.toString().slice(0, -1),
        }));
      }
    } else if (
      calculations.value2 &&
      !calculations.result &&
      textContent === "ᐊ"
    ) {
      if (calculations.value2.length === 1) {
        setCalculations((prevState) => ({
          ...prevState,
          value2: "0",
        }));
      } else {
        setCalculations((prevState) => ({
          ...prevState,
          value2: prevState.value2.toString().slice(0, -1),
        }));
      }
    } else if (calculations.result && !isNaN(parseFloat(textContent))) {
      clear();
      setCalculations((prevState) => ({
        ...prevState,
        value1: parseFloat(prevState.value1 + textContent),
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
        value2: "0",
        result: "",
      }));
      setSmallDisplayValues([`${calculations.result} ${textContent}`]);
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
      setIsValue(false);
      const result = handleEqual();

      setSmallDisplayValues([`${result} ${textContent}`]);
      setCalculations((prevState) => ({
        ...prevState,
        value1: prevState.result,
        operand: textContent,
        value2: "0",
        result: "",
      }));
    } else if (calculations.operand && textContent === ".") {
      setIsValue(true);
      if (!String(calculations.value2).includes(".")) {
        setCalculations((prevState) => ({
          ...prevState,
          value2: prevState.value2 + textContent,
        }));
      }
    } else if (calculations.value1 && textContent === ".") {
      if (!String(calculations.value1).includes(".")) {
        setCalculations((prevState) => ({
          ...prevState,
          value1: prevState.value1 + textContent,
        }));
      }
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

      setSmallDisplayValues([`${calculations.value1} ${textContent}`]);
    } else if (calculations.operand && !isNaN(parseFloat(textContent))) {
      setIsValue(true);
      setCalculations((prevState) => ({
        ...prevState,
        value2: String(parseFloat(prevState.value2 + textContent)),
      }));
    } else if (!isNaN(parseFloat(textContent))) {
      setIsValue(false);
      setCalculations((prevState) => ({
        ...prevState,
        value1: String(parseFloat(prevState.value1 + textContent)),
      }));
    }
    if (textContent === "clear") {
      clear();
    }
    // console.log(calculations);
  };

  return (
    <main>
      <Screen
        smallDisplayValues={smallDisplayValues}
        displayValues={
          isResult
            ? calculations.result
            : isValue
            ? calculations.value2
            : calculations.value1
        }
      />
      <Buttons buttonClicked={handleButtonClicked} />
      <footer>
        <h4>Copyright &copy; 2023 catoverhat</h4>
        <Githublogo />
      </footer>
    </main>
  );
}

export default App;
