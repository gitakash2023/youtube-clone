import React from "react";
import classes from "./prop.module.scss";

function LeftSideBarProp(props: any) {
  return (
    <div className={classes.container}>
      <div className={classes.propIconAndText}>
        <span className={classes.icon}>{props.icon}</span>
        <span className={classes.text}>{props.text}</span>
      </div>
    </div>
  );
}

export default LeftSideBarProp;
