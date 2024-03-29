import React from 'react';
import classes from './BurgerIngredients.module.css'

const burgerIngredient = (props) => {
  // Write some login to render the jsx code based on the props
  let ingredient = null;

  // check the type of the ingredient
  switch (props.type) {
    case ('bread-top'):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>
      break;

    case ('meat'):
      ingredient = <div className={classes.Meat}></div>
      break;

    case ('cheese'):
      ingredient = <div className={classes.Cheese}></div>
      break;

    case ('salad'):
      ingredient = <div className={classes.Salad}></div>
      break;

    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>
      break;

    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
