import React from 'react';
import classes from './CostTracker.module.css';

const processTotalCost = (total) => {
  return total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
};

const costTracker = (props) => (
  <div className={classes.CostTracker}>
    <button className={classes.btn}>CHECKOUT</button>
    <span className={classes.total}>{processTotalCost(props.total)}</span>
  </div>
);

export default costTracker;
