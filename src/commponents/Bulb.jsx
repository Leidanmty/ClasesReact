const Bulb = ({ isOn, toggleIsOn }) => {
    return (
      <div>
        <div
          className={`bulb ${isOn ? "bg-yellow" : "bg-gray"}`}
          // style={{background: isOn ? "yellow" : "gray" }}
        ></div>
        <button onClick={toggleIsOn}>{isOn ? "on" : "off"}</button>
      </div>
    );
  };
  
  export default Bulb;