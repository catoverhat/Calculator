import "./Screen.css";

const Screen = ({ displayValues, smallDisplayValues }) => {
  //   console.log(displayButtons);
  return (
    <div className="screen">
      <div className="calculations">{smallDisplayValues}</div>
      <div className="numbers">{displayValues}</div>
    </div>
  );
};

export default Screen;
