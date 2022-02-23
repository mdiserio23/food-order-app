import classes from './Card.module.css';
const Card = (props) => {

  const defClasses = classes.card + ' ' + props.className;
  return <div className={defClasses}>{props.children}</div>;
};

export default Card;
