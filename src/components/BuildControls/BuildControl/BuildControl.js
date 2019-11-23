import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <span className={classes.label}>{props.label}</span>
    <span className={classes.controls}>
      <button onClick={props.added} className={`${classes.control} ${classes.add}`}>+</button>
      <button onClick={props.removed} className={`${classes.control} ${classes.removed}`}>-</button>
<span className={classes.quantity}>{props.ingredientQuantity}</span>
    </span>
  </div>
);

export default buildControl;
