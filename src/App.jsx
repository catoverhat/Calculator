import { useState } from "react";
import Body from "./components/body";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  return (
    <Body>
      <Screen />
      <Buttons />
    </Body>
  );
}

export default App;
