import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [btnVal, setBtnVal] = useState("");

  const onbuttonClick = (nameBtn) => {
    if (nameBtn === "C") {
      setBtnVal("");
    } else if (nameBtn === "=") {
      const evaluate = eval(btnVal);
      setBtnVal(evaluate);
    } else {
      const DisplayButton = btnVal + nameBtn;
      setBtnVal(DisplayButton);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={btnVal}></Display>
        <ButtonsContainer onbuttonClick={onbuttonClick}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
