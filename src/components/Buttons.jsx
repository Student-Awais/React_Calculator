import styles from "./Buttons.module.css";
const Buttons = ({ onButtonCLick }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {button.map((btn, index) => (
        <button
          key={index}
          className={styles.buttons}
          onClick={() => onButtonCLick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
