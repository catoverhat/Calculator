import { Fragment } from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <Fragment>
      <button className="grid-span-2-col">Clear</button>
      <button>&#x140A;</button>
      <button className="operands">&#x00F7;</button>
      <button className="bold">7</button>
      <button className="bold">8</button>
      <button className="bold">9</button>
      <button className="operands">x</button>
      <button className="bold">4</button>
      <button className="bold">5</button>
      <button className="bold">6</button>
      <button className="operands">-</button>
      <button className="bold">1</button>
      <button className="bold">2</button>
      <button className="bold">3</button>
      <button className="operands">+</button>
      <button className="bold">+/-</button>
      <button className="bold">0</button>
      <button className="bold">.</button>
      <button className="equal">=</button>
    </Fragment>
  );
};
export default Buttons;
