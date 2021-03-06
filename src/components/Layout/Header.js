import imgHeader from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton clickCart={props.clickCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={imgHeader} alt="a table of all meals" />
      </div>
    </>
  );
};

export default Header;
