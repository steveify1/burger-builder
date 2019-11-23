import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// List of ingredient labels that'll mcake up the build controls
const controls = [
 { type: 'salad' },
 { type: 'bacon' },
 { type: 'cheese' },
 { type: 'meat' },
];


// the BuildControls component
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <h3>Select ingredient</h3>
    {controls.map((ctrl) => (
    <BuildControl
      key={ctrl.type.toUpperCase()}
      label={ctrl.type}
      added={() => props.ingredientAdded(ctrl.type)}
      removed={() => props.ingredientRemoved(ctrl.type)}
      ingredientQuantity={props.ingredientQuantities[ctrl.type]}/>
      ))}
  </div>
);

export default buildControls;
