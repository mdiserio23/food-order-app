import classes from "./ModalContent.module.css";
import Button from "../UI/Button";

const ModalContent = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
      <footer className={classes.footer}>
        <Button onClick={props.onCloseModal}>Close</Button>
        <Button onClick={props.onOrder}>Order</Button>
      </footer>
    </div>
  );
};

export default ModalContent;
