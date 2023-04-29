import { useState } from "react";
import Body from "./components/body";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const [calculations, setCalculations] = useState({
    value1: [],
    operand: "",
    value2: [],
  });

  const handleButtonClicked = ({ target: { textContent } }) => {
    if (textContent === "+" || textContent === "-") {
      setCalculations((prevState) => ({
        ...prevState,
        operand: textContent,
      }));
    } else if (!calculations.operand && calculations.operand === "") {
      setCalculations((prevState) => ({
        ...prevState,
        value1: [...prevState.value1, textContent],
      }));
    } else if (calculations.operand) {
      setCalculations((prevState) => ({
        ...prevState,
        value2: [...prevState.value2, textContent],
      }));
    }
    if (textContent === "=") {
      if(calculations.operand === '+'){
        console.log(parseInt(calculations.value1.join('')) + parseInt(calculations.value2))
      }
    }

    if (textContent === "clear") {
      setDisplayValue([]);
      setCalculations({
        value1: [],
        operand: "",
        value2: [],
      });
      setIsResult(false);
    } else {
      setDisplayValue((prevState) => [...prevState, textContent]);
    }
    console.log(calculations);
  };

  return (
    <Body>
      <Screen displayButtons={displayValue} />
      <Buttons buttonClicked={handleButtonClicked} />
    </Body>
  );
}

export default App;
