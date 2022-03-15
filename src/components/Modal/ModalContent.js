import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default ModalContent;
