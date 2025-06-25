import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const buttonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);

      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={buttonClick}></ButtonContainer>
    </div>
  );
}

export default App;
