import React, { Component } from 'react';
import classes from './BurgerBuilder.module.css';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <h2 className={classes.burger}>Burger builder page.</h2>
        <div>Burger Builder</div>
        <div>Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
