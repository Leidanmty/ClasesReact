import { useState } from "react";

const Button = ({ toggleIsOn }) => {
  return <button onClick={toggleIsOn}>on / off</button>;
};

export default Button;