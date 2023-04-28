import { useState } from "react";
import Body from "./components/body";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [isClick, setIsClick] = useState([]);
  const handleButtonClicked = ({ target: { textContent } }) => {
    setIsClick([...isClick, textContent]);
  };
   //   const handleSelectedButton = () => {
  //     switch (displayButtons) {
  //       case "0":
  //         return 0;
  //       case "1":
  //         return 1;
  //       case "2":
  //         return 2;
  //       case "3":
  //         return 3;
  //       case "4":
  //         return 4;
  //       case "5":
  //         return 5;
  //       case "6":
  //         return 6;
  //       case "7":
  //         return 7;
  //       case "8":
  //         return 8;
  //       case "9":
  //         return 9;
  //       default:
  //         return 0;
  //     }
  //   };
  return (
    <Body>
      <Screen displayButtons={isClick} />
      <Buttons buttonClicked={handleButtonClicked} />
    </Body>
  );
}

export default App;