import React from 'react';
import classes from './CostTracker.module.css';
import convertToMoney from '../../utils/covertToMoney';

const costTracker = (props) => (
  <div className={classes.CostTracker}>
    <button className={classes.btn}
      onClick={props.clicked}>ORDER NOW</button>
    <span className={classes.total}>{convertToMoney(props.total)}</span>
  </div>
);

export default costTracker;
