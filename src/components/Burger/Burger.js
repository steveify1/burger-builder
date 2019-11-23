import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients';

const getIngredentsElements = (ingredients) => {
  const ingredientsKeys = Object.keys(ingredients);
  let results = [];
  ingredientsKeys.forEach(ingredient => {
    let container = [];
    for (let i = 0; i < ingredients[ingredient]; i++) {
      container.push(<BurgerIngredient key={`${ingredient}-${i}`} type={ingredient} />);
    }
    results = [...results, ...container];
  });

  return results;
}

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />

      {getIngredentsElements(props.ingredients)}

      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
