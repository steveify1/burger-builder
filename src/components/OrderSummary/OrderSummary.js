import React from 'react';
import classes from './OrderSummary.module.css';
import convertToMoney from '../../utils/covertToMoney';


/**
 * This returns an array of list items each including a specific ingredient
 * and it's total cost based on its defined price and the units of it a
 * customer is requesting
 * @param {Object} ingredientsCount all ingredients as keys and their corresponding
 * count as values
 * @param {Objects} prices all ingredients as keys and their corresponding prices
 * as values
 * @returns { Array } an array of HTML list items
 */
const outlineIngredientsCost = (ingredientsCount, prices) => {
  let total; // Will hold the total for each specific ingredient in a given iteration
  // Loop across all the ingredients and get calculate the total cost for each
  return Object.keys(ingredientsCount).map((ingredient, i) => {
    // Obtain the total cost for the ingredient in the current iteration
    total = prices[ingredient] * ingredientsCount[ingredient];

    return (
      <li key={i}>
        <span className={classes.ingredient}>{ingredient}</span>
        <span
          className={classes.ingredientCost}>{convertToMoney(total)}
        </span>
      </li>
    );
  });
}

// Generates an order summary
const orderSummary = (props) => (
  // make the outline for ingredients cost
  <div className={classes.OrderSummary}>
    <div className={classes.summary}>
      <h3>Your Order Summary</h3>

      {/* List ingredients and prices */}
      <ul className={classes.outline}>
        {outlineIngredientsCost(props.ingredients, props.prices)}
      </ul>

      <div className={classes.grandTotal}>
        <span>TOTAL</span>
        <span>{convertToMoney(props.grandTotal)}</span>
      </div>
    </div>

    {/* Payment Button */}
    <button>proceed to checkout</button>
  </div>
);

export default orderSummary;
