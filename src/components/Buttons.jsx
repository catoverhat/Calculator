import { Fragment } from "react";
import "./Buttons.css";

const Buttons = ({ buttonClicked }) => {
  return (
    <Fragment>
      <button onClick={buttonClicked} className="grid-span-2-col">
        Clear
      </button>
      <button onClick={buttonClicked}>&#x140A;</button>
      <button onClick={buttonClicked} className="operands">
        &#x00F7;
      </button>
      <button onClick={buttonClicked} className="bold">
        7
      </button>
      <button onClick={buttonClicked} className="bold">
        8
      </button>
      <button onClick={buttonClicked} className="bold">
        9
      </button>
      <button onClick={buttonClicked} className="operands">
        x
      </button>
      <button onClick={buttonClicked} className="bold">
        4
      </button>
      <button onClick={buttonClicked} className="bold">
        5
      </button>
      <button onClick={buttonClicked} className="bold">
        6
      </button>
      <button onClick={buttonClicked} className="operands">
        -
      </button>
      <button onClick={buttonClicked} className="bold">
        1
      </button>
      <button onClick={buttonClicked} className="bold">
        2
      </button>
      <button onClick={buttonClicked} className="bold">
        3
      </button>
      <button onClick={buttonClicked} className="operands">
        +
      </button>
      <button onClick={buttonClicked} className="bold">
        +/-
      </button>
      <button onClick={buttonClicked} className="bold">
        0
      </button>
      <button onClick={buttonClicked} className="bold">
        .
      </button>
      <button onClick={buttonClicked} className="equal">
        =
      </button>
    </Fragment>
  );
};
export default Buttons;
