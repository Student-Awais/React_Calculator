import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
import React from "react";
const App = () => {
  let [displayValue, setDisplayValue] = useState("");
  const onButtonCLick = (btn) => {
    if (btn === "C") {
      setDisplayValue("");
    } else if (btn === "=") {
      // const result = eval(displayValue);
      // setDisplayValue(result);
      try {
        const result = eval(displayValue);
        setDisplayValue(result);
      } catch {
        setDisplayValue("Math Error");
        displayValue = "";
        setTimeout(() => {
          setDisplayValue("");
        }, 2000);
      }
    } else {
      const newValue = displayValue + btn;
      setDisplayValue(newValue);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Display displayValue={displayValue}></Display>
        <Buttons onButtonCLick={onButtonCLick}></Buttons>
      </div>
    </div>
  );
};

export default App;
