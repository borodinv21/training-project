import classes from "./Button.module.css";

export default function Button({ name, isActive, onClick }) {
  console.log(classes);
  return (
    <button
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={onClick}>
      {name}
    </button>
  );
}
