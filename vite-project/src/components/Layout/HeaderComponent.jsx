import React, { Fragment } from "react";
import classes from "../Layout/HeaderComponent.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderCartButtonComponent from "./HeaderCartButtonComponent";

const HeaderComponent = () => {
  return (
    <Fragment>
      {/* part 1 */}
      <header className={classes.header}>
        {/* this holds header */}
        <h1>DineWithReact</h1>

        {/* our custom button */}
        <HeaderCartButtonComponent/>
      </header>

        {/* part 2 this holds image */}

      <div className={classes["main-image"]}>
        <img src={headerImage} alt="header image" />
      </div>
    </Fragment>
  );
};

export default HeaderComponent;
