import "./Screen.css";

const Screen = ({ displayButtons }) => {
//   console.log(displayButtons);
  return (
    <div className="screen">
      <div className="calculations">4444447777786665 + 1111111111111111 = </div>
      <div className="numbers">{displayButtons}</div>
    </div>
  );
};

export default Screen;
